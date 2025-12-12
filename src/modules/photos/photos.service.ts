import {
  BadRequestException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageService } from '../../storage/storage.service';
import { SupabaseClient } from '@supabase/supabase-js';
import { InjectSupabaseClient } from 'nestjs-supabase-js';
import { LocationService } from '../locations/locations.service';
import { ProjectService } from '../projects/projects.service';
import sharp from 'sharp';

@Injectable()
export class PhotoService {
  private readonly logger = new Logger(PhotoService.name);
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
    @Inject(forwardRef(() => LocationService))
    private locationService: LocationService,
    @Inject(forwardRef(() => ProjectService))
    private projectService: ProjectService,
    @InjectSupabaseClient() private supabase: SupabaseClient,
  ) {}

  async uploadPhotos(files: Express.Multer.File[], locationId: string) {
    this.logger.log(
      `🚀 Iniciando processamento de ${files.length} fotos para location: ${locationId}`,
    );

    try {
      this.logger.debug(`🔍 Validando locationId: ${locationId}`);
      const location =
        await this.locationService.validateLocationExists(locationId);
      this.logger.debug(
        `✅ Location válido: ${location.name} (ID: ${location.id})`,
      );
    } catch (error) {
      this.logger.error(`❌ Location não encontrado: ${locationId}`, error);
      throw error;
    }

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    this.logger.debug(
      `📏 Validando tamanho dos arquivos (limite: ${MAX_FILE_SIZE} bytes)`,
    );

    const invalidFiles = files.filter(
      (file) =>
        file.size > MAX_FILE_SIZE || !file.mimetype?.startsWith('image/'),
    );

    if (invalidFiles.length > 0) {
      this.logger.error(
        `❌ Arquivos inválidos encontrados: ${invalidFiles.length}`,
      );
      invalidFiles.forEach((file, index) => {
        this.logger.error(`Arquivo inválido ${index + 1}:`, {
          name: file.originalname,
          size: file.size,
          maxSize: MAX_FILE_SIZE,
          mimetype: file.mimetype,
          isImage: file.mimetype?.startsWith('image/'),
        });
      });
      throw new BadRequestException(
        `Arquivos inválidos: tamanho máximo 10MB e apenas imagens são permitidas`,
      );
    }

    this.logger.debug(
      `✅ Todos os ${files.length} arquivos passaram na validação inicial`,
    );

    this.logger.debug('🔢 Buscando última foto para numeração sequencial');
    const lastPhoto = await this.prisma.photo.findFirst({
      where: { locationId },
      orderBy: { name: 'desc' },
    });

    let lastPhotoNumber = 0;
    if (lastPhoto?.name) {
      const match = lastPhoto.name.match(/Foto(\d+)/);
      if (match) {
        lastPhotoNumber = parseInt(match[1]);
      }
    }
    this.logger.debug(`📊 Último número de foto: ${lastPhotoNumber}`);

    try {
      this.logger.debug('🏗️ Buscando projeto para nomeação dos arquivos');
      const location = await this.prisma.location.findUnique({
        where: { id: locationId },
        include: { project: { include: { agency: true } } },
      });

      if (!location?.project) {
        throw new NotFoundException(
          'Projeto não encontrado para esta localização',
        );
      }

      const project = location.project;
      this.logger.debug(`📋 Informações do projeto:`, {
        projectType: project.projectType,
        agencyNumber: project.agency.agencyNumber,
      });

      try {
        this.logger.log(`📸 Iniciando upload de ${files.length} fotos`);

        const uploadedPhotos = await Promise.all(
          files.map(async (file, index) => {
            this.logger.debug(
              `🔄 Processando arquivo ${index + 1}/${files.length}:`,
              {
                originalname: file.originalname,
                size: `${(file.size / 1024 / 1024).toFixed(2)}MB`,
                mimetype: file.mimetype,
                bufferLength: file.buffer?.length || 0,
              },
            );

            const photoNumber = lastPhotoNumber + index + 1;
            const timestamp = Date.now();

            const uniqueFileName = `${project.projectType}-${project.agency.agencyNumber}-${timestamp}-${index}-${file.originalname}`;
            this.logger.debug(`📝 Nome gerado: ${uniqueFileName}`);

            try {
              this.logger.debug(
                `📤 Enviando para storageService.uploadFile...`,
              );
              const uploadResult = await this.storageService.uploadFile({
                originalname: uniqueFileName,
                buffer: file.buffer,
                mimetype: file.mimetype || 'image/jpeg',
                size: file.size,
              });

              this.logger.debug(
                `✅ StorageService concluído para arquivo ${index + 1}:`,
                {
                  key: uploadResult.key,
                  url: uploadResult.url,
                  metadata: uploadResult.metadata,
                },
              );

              const photoName = `Foto${photoNumber}-${location.name}`;
              this.logger.debug(`💾 Salvando no banco: ${photoName}`);

              const savedPhoto = await this.prisma.photo.create({
                data: {
                  name: photoName,
                  locationId,
                  filePath: uploadResult.key,
                  selectedForPdf: false,
                },
              });

              this.logger.debug(
                `✅ Foto ${index + 1} salva com ID: ${savedPhoto.id}`,
              );
              return savedPhoto;
            } catch (uploadError) {
              this.logger.error(
                `❌ Erro no upload do arquivo ${index + 1}:`,
                uploadError,
              );
              throw uploadError;
            }
          }),
        );

        this.logger.log(
          `🎉 Upload concluído com sucesso! ${uploadedPhotos.length} fotos salvas`,
        );
        return uploadedPhotos;
      } catch (error) {
        this.logger.error(
          '💥 Erro durante o processamento dos uploads:',
          error,
        );
        throw new InternalServerErrorException(
          'Falha ao fazer upload das fotos',
        );
      }
    } catch (error) {
      this.logger.error('❌ Erro ao buscar projeto:', error);
      throw error;
    }
  }

  async getPhotoById(id: string) {
    const photo = await this.prisma.photo.findUnique({
      where: { id },
    });

    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    return photo;
  }

  async getPhotosByLocation(locationId: string, includeSignedUrl = false) {
    const photos = await this.prisma.photo.findMany({
      where: { locationId },
      include: {
        location: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (includeSignedUrl) {
      return Promise.all(
        photos.map(async (photo) => ({
          ...photo,
          signedUrl: await this.storageService.getSignedUrl(photo.filePath),
        })),
      );
    }

    return photos;
  }

  async updatePhoto(
    id: string,
    selectedForPdf: boolean | undefined,
    currentUser?: { role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para atualizar foto',
      );
    }

    const photo = await this.prisma.photo.update({
      where: { id },
      data: { selectedForPdf },
      include: {
        location: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return {
      ...photo,
      url: await this.storageService.getSignedUrl(photo.filePath),
    };
  }

  async rotatePhoto(
    id: string,
    rotation: number,
    currentUser?: { role: string },
  ) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para rotacionar fotos',
      );
    }

    const existingPhoto = await this.getPhotoById(id);

    if (!existingPhoto.filePath) {
      throw new BadRequestException(
        'Caminho do arquivo não encontrado no banco de dados',
      );
    }

    try {
      const fileBuffer = await this.storageService.getFileBuffer(
        existingPhoto.filePath,
      );

      let rotatedImage = sharp(fileBuffer.buffer);

      if (rotation !== 0) {
        rotatedImage = rotatedImage.rotate(rotation);
      }

      const rotatedBuffer = await rotatedImage.jpeg({ quality: 90 }).toBuffer();

      await this.storageService.deleteFile(existingPhoto.filePath);

      const location = await this.locationService.validateLocationExists(
        existingPhoto.locationId,
      );
      const project = await this.projectService.findOne(location.projectId);

      const uploadResult = await this.storageService.uploadFile({
        originalname: `${project.projectType}-${project.agency.agencyNumber}-rotated-${Date.now()}.jpg`,
        buffer: rotatedBuffer,
        mimetype: 'image/jpeg',
        size: rotatedBuffer.length,
      });

      const updatedPhoto = await this.prisma.photo.update({
        where: { id },
        data: {
          filePath: uploadResult.key,
        },
        include: {
          location: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      return {
        ...updatedPhoto,
        url: await this.storageService.getSignedUrl(updatedPhoto.filePath),
      };
    } catch (error) {
      console.error('Erro detalhado ao rotacionar foto:', error);
    }
  }

  async deletePhoto(id: string, currentUser?: { role: string }) {
    if (currentUser?.role === 'vistoriador') {
      throw new ForbiddenException(
        'Vistoriadores não têm permissão para deletar foto',
      );
    }

    const photo = await this.prisma.photo.findUnique({ where: { id } });
    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    await this.storageService.deleteFile(photo.filePath);
    await this.prisma.photo.delete({ where: { id } });

    return { success: true, message: 'Foto deletada com sucesso' };
  }
}
