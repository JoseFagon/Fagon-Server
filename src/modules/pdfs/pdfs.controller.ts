import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  Delete,
  UploadedFile,
  UseInterceptors,
  InternalServerErrorException,
  NotFoundException,
  Res,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { PdfService } from './pdfs.service';
import { StorageService } from 'src/storage/storage.service';
import {
  CurrentUser,
  RequireAuth,
} from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { PdfResponseDto } from './dto/response-pdf.dto';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { JwtPayload } from 'src/common/interfaces/jwt.payload.interface';

@ApiTags('PDFs')
@ApiBearerAuth()
@RequireAuth()
@Roles(ROLES.ADMIN, ROLES.FUNCIONARIO)
@Controller('pdfs')
export class PdfController {
  constructor(
    private readonly pdfService: PdfService,
    private readonly storageService: StorageService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Generate a new PDF document' })
  @ApiResponse({
    status: 201,
    type: PdfResponseDto,
    description: 'PDF generated successfully',
  })
  @ApiBody({ type: CreatePdfDto })
  async generatePdf(
    @Body() createPdfDto: CreatePdfDto,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pdfService.generatePdf(
      createPdfDto.projectId,
      createPdfDto.pdfType,
      currentUser,
    );
  }

  @Post(':id/sign')
  @ApiOperation({ summary: 'Upload signed PDF version' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async signPdf(
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile() signedFile: Express.Multer.File,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pdfService.signPdf(id, signedFile, currentUser);
  }

  @Get('project/:projectId')
  @ApiOperation({ summary: 'Get all PDFs for a project' })
  @ApiParam({
    name: 'projectId',
    description: 'Project UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: [PdfResponseDto],
    description: 'List of PDFs for the project',
  })
  async findByProject(
    @Param('projectId', ParseUUIDPipe) projectId: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pdfService.findByProject(projectId, currentUser);
  }

  @Get(':id/signed-url')
  @ApiOperation({ summary: 'Obtém URL assinada para um PDF' })
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
  async getSignedUrl(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    const pdf = await this.pdfService.getPdfById(id, currentUser);

    const pathToUse = pdf.signedFilePath || pdf.filePath;
    const signedUrl = await this.storageService.getSignedUrl(pathToUse);
    return { url: signedUrl };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get PDF document details' })
  @ApiParam({
    name: 'id',
    description: 'PDF document UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: PdfResponseDto,
    description: 'PDF document details',
  })
  @ApiResponse({
    status: 404,
    description: 'PDF document not found',
  })
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pdfService.getPdfById(id, currentUser);
  }

  @Get(':id/download')
  @ApiOperation({ summary: 'Download PDF document' })
  @ApiParam({
    name: 'id',
    description: 'PDF document UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'PDF file download',
    content: {
      'application/pdf': {
        schema: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'PDF document not found',
  })
  async downloadPdf(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() res: Response,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    try {
      const result = await this.pdfService.downloadPdf(id, currentUser);

      if (!result) {
        throw new NotFoundException('PDF não encontrado');
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${result.filename}"`,
      );

      result.fileStream.stream.pipe(res);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        error instanceof Error
          ? error.message
          : 'Erro desconhecido ao baixar PDF',
      );
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete PDF document' })
  @ApiParam({
    name: 'id',
    description: 'PDF document UUID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'PDF file download',
    content: {
      'application/pdf': {
        schema: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'PDF document not found',
  })
  async deletePdf(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.pdfService.deletePdf(id, currentUser);
  }
}
