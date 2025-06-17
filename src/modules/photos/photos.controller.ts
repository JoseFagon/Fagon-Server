import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Param,
  Delete,
  ParseUUIDPipe,
  Body,
  Patch,
  UploadedFiles,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { PhotoService } from './photos.service';
import { PhotoResponseDto } from './dto/response-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { StorageService } from 'src/storage/storage.service';

@ApiTags('Photos')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO, ROLES.VISTORIADOR)
@Controller('photos')
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService,
    private readonly storageService: StorageService,
  ) {}

  @Post('upload/:locationId')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'photos', maxCount: 10 }]))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload de fotos para uma localização',
    schema: {
      type: 'object',
      properties: {
        photos: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Array de fotos para upload',
        },
      },
    },
  })
  async uploadPhotos(
    @UploadedFiles() files: { photos?: Express.Multer.File[] },
    @Param('locationId', ParseUUIDPipe) locationId: string,
  ) {
    if (!files?.photos || files.photos.length === 0) {
      throw new BadRequestException('Nenhuma foto foi enviada');
    }
    return this.photoService.uploadPhotos(files.photos, locationId);
  }

  @Get('location/:locationId')
  @ApiOperation({ summary: 'Lista fotos de uma localização' })
  @ApiResponse({
    status: 200,
    type: [PhotoResponseDto],
    description: 'Lista de fotos',
  })
  async getPhotosByLocation(
    @Param('locationId', ParseUUIDPipe) locationId: string,
    @Query('signed') signed: string,
  ) {
    return this.photoService.getPhotosByLocation(locationId, signed === 'true');
  }

  @Patch(':id')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Atualiza status de seleção para PDF' })
  @ApiResponse({
    status: 200,
    type: PhotoResponseDto,
    description: 'Foto atualizada',
  })
  async updatePhoto(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ) {
    return this.photoService.updatePhoto(id, updatePhotoDto.selectedForPdf);
  }

  @Get(':id/signed-url')
  @ApiOperation({ summary: 'Obtém URL assinada para uma foto' })
  @ApiResponse({
    status: 200,
    description: 'URL assinada gerada com sucesso',
    schema: {
      type: 'object',
      properties: {
        url: { type: 'string' },
      },
    },
  })
  async getSignedUrl(@Param('id', ParseUUIDPipe) id: string) {
    const photo = await this.photoService.getPhotoById(id);
    const signedUrl = await this.storageService.getSignedUrl(photo.filePath);
    return { url: signedUrl };
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Remove uma foto' })
  @ApiResponse({
    status: 200,
    description: 'Foto removida com sucesso',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        message: { type: 'string' },
      },
    },
  })
  async deletePhoto(@Param('id', ParseUUIDPipe) id: string) {
    return this.photoService.deletePhoto(id);
  }
}
