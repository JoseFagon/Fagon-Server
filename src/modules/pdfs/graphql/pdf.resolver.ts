import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PdfRecord } from './pdf.type';
import { PdfService } from '../pdfs.service';
import { GeneratePdfInput, UpdateSignedPdfInput } from './pdf.input';

@Resolver(() => PdfRecord)
export class PdfResolver {
  constructor(private readonly pdfService: PdfService) {}

  @Mutation(() => PdfRecord)
  async generatePdf(
    @Args('input') input: GeneratePdfInput,
  ): Promise<PdfRecord> {
    const { projectId, pdfType } = input;
    return this.pdfService.generatePdf(projectId, pdfType, pdfType);
  }

  @Mutation(() => PdfRecord)
  async updateSignedPdf(
    @Args('input') input: UpdateSignedPdfInput,
  ): Promise<PdfRecord> {
    const { pdfId, signedFilePath } = input;

    if (!pdfId || !signedFilePath) {
      throw new Error('Both pdfId and signedFilePath are required');
    }

    return this.pdfService.updateSignedPdf(pdfId, signedFilePath);
  }

  @Query(() => [PdfRecord])
  async pdfsByProject(
    @Args('projectId', { type: () => String }) projectId: string,
  ): Promise<PdfRecord[]> {
    return this.pdfService.findByProject(projectId);
  }
}
