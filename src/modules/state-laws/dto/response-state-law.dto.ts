import { ApiProperty } from '@nestjs/swagger';

export class StateLawResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  state!: string;

  @ApiProperty()
  textState!: string;

  @ApiProperty()
  lawReference!: string;

  @ApiProperty()
  lawReference2!: string | null;

  @ApiProperty()
  policeAbbreviation!: string;

  @ApiProperty()
  fullText!: string | null;

  @ApiProperty()
  fullText2!: string | null;

  @ApiProperty()
  publishedAt!: Date;

  @ApiProperty()
  active!: boolean;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
