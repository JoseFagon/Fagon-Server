import { InputType, Field, ID } from '@nestjs/graphql';
import { PdfType } from '@prisma/client';

@InputType()
export class GeneratePdfInput {
  @Field(() => ID)
  projectId!: string;

  @Field(() => PdfType)
  pdfType!: PdfType;
}

@InputType()
export class UpdateSignedPdfInput {
  @Field(() => ID)
  pdfId!: string;

  @Field(() => String)
  signedFilePath!: string;
}
