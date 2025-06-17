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
  @ApiOperation({ summary: 'Upload photos for a pathology' })
  @ApiResponse({
    status: 201,
    type: PathologyPhotoResponseDto,
    description: 'Pathology photos successfully uploaded',
  })
  @ApiBody({
    description: 'Upload photos for a pathology',
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
  @ApiOperation({ summary: 'Get specific pathology photo details' })
  @ApiResponse({
    status: 200,
    type: PathologyPhotoResponseDto,
    description: 'Pathology photo details',
  })
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pathologyPhotoService.getPhotoByPathology(id);
  }

  @Get('pathology/:pathologyId')
  @ApiOperation({ summary: 'List photos of a pathology' })
  @ApiResponse({
    status: 200,
    type: [PathologyPhotoResponseDto],
    description: 'List of pathology photos',
  })
  getPhotosByPathology(
    @Param('pathologyId', ParseUUIDPipe) pathologyId: string,
  ) {
    return this.pathologyPhotoService.getPhotosByPathology(pathologyId);
  }

  @Delete(':id')
  @Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
  @ApiOperation({ summary: 'Delete a pathology photo' })
  @ApiResponse({
    status: 204,
    description: 'Pathology photo successfully deleted',
  })
  deletePhoto(@Param('id', ParseUUIDPipe) id: string) {
    return this.pathologyPhotoService.deletePhoto(id);
  }
}
