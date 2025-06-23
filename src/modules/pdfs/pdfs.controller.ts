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
import { RequireAuth } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { PdfResponseDto } from './dto/response-pdf.dto';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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
  async generatePdf(@Body() createPdfDto: CreatePdfDto) {
    return this.pdfService.generatePdf(
      createPdfDto.projectId,
      createPdfDto.pdfType,
    );
  }

  @Post(':id/sign')
  @ApiOperation({ summary: 'Upload signed PDF version' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async signPdf(
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile() signedFile: Express.Multer.File,
  ) {
    return this.pdfService.signPdf(id, signedFile);
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
  async findByProject(@Param('projectId', ParseUUIDPipe) projectId: string) {
    return this.pdfService.findByProject(projectId);
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
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pdfService.getPdfById(id);
  }

  // pdf.controller.ts

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
  async downloadPdf(@Param('id', ParseUUIDPipe) id: string) {
    return this.pdfService.downloadPdf(id);
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
  async deletePdf(@Param('id', ParseUUIDPipe) id: string) {
    return this.pdfService.deletePdf(id);
  }
}
