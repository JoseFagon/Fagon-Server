import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Param,
  Delete,
  ParseUUIDPipe,
  Body,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { PathologyPhotoResponseDto } from './dto/response-pathology-photo.dto';
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { CreatePathologyPhotoDto } from './dto/create-pathology-photo.dto';
import { PathologyPhotoService } from './pathology-photos.service';

@ApiTags('Pathology Photos')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO, ROLES.VISTORIADOR)
@Controller('pathology-photos')
export class PathologyPhotoController {
  constructor(private readonly pathologyPhotoService: PathologyPhotoService) {}

  @Post('upload/:pathologyId')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload de fotos para uma patologia' })
  @ApiResponse({
    status: 201,
    type: PathologyPhotoResponseDto,
    description: 'Foto da patologia enviada com sucesso',
  })
  @ApiBody({
    description: 'Upload de fotos para uma patologia',
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
      required: ['files'],
    },
  })
  uploadPathologyPhoto(
    @UploadedFiles() files: Express.Multer.File[],
    @Param() createPathologyPhotoDto: CreatePathologyPhotoDto,
  ) {
    return this.pathologyPhotoService.uploadPhotos(
      files,
      createPathologyPhotoDto.pathologyId,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém uma foto específica de patologia' })
  @ApiResponse({
    status: 200,
    type: PathologyPhotoResponseDto,
    description: 'Detalhes da foto da patologia',
  })
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pathologyPhotoService.getPhotoByPathology(id);
  }

  @Get('pathology/:pathologyId')
  @ApiOperation({ summary: 'Lista fotos de uma patologia' })
  @ApiResponse({
    status: 200,
    type: [PathologyPhotoResponseDto],
    description: 'Lista de fotos da patologia',
  })
  getPhotosByPathology(
    @Param('pathologyId', ParseUUIDPipe) pathologyId: string,
  ) {
    return this.pathologyPhotoService.getPhotosByPathology(pathologyId);
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Remove uma foto de patologia' })
  @ApiResponse({
    status: 204,
    description: 'Foto removida com sucesso',
  })
  deletePhoto(@Param('id', ParseUUIDPipe) id: string) {
    return this.pathologyPhotoService.deletePhoto(id);
  }
}
