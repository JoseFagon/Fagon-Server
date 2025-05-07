import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { PdfType } from '@prisma/client';

registerEnumType(PdfType, {
  name: 'PdfType',
});

@ObjectType('PdfRecord')
export class PdfRecord {
  @Field(() => ID)
  id!: string;

  @Field()
  projectId!: string;

  @Field()
  filePath!: string;

  @Field(() => PdfType)
  pdfType!: PdfType;

  @Field(() => String, { nullable: true })
  signedFilePath!: string | null;

  @Field()
  generatedAt!: Date;
}
