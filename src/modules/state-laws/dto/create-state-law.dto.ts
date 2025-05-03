import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsBoolean } from 'class-validator';

export class CreateStateLawDto {
  @ApiProperty({
    description: 'Nome do estado',
    example: 'São Paulo',
  })
  @IsString()
  @IsNotEmpty()
  state!: string;

  @ApiProperty({
    description: 'Nome do estado seguido de sua preposição',
    example: 'de São Paulo',
  })
  @IsString()
  @IsNotEmpty()
  textState!: string;

  @ApiProperty({
    description: 'Referência da lei 1',
    example: 'Lei Estadual nº 12.345/2020',
  })
  @IsString()
  @IsNotEmpty()
  lawReference!: string;

  @ApiProperty({
    description: 'Referência da lei 2 (opcional)',
    example: 'Decreto nº 67.890/2021',
  })
  @IsString()
  lawReference2!: string;

  @ApiProperty({
    description: 'Abreviatura da polícia estadual',
    example: 'PMESP',
  })
  @IsString()
  @IsNotEmpty()
  policeAbbreviation!: string;

  @ApiProperty({
    description: 'Texto completo da lei 1',
    required: false,
  })
  @IsString()
  fullText?: string;

  @ApiProperty({
    description: 'Texto completo da lei 2',
    required: false,
  })
  @IsString()
  fullText2?: string;

  @ApiProperty({
    example: '2020-01-15',
  })
  @IsDateString()
  publishedAt!: string;

  @ApiProperty({
    default: true,
  })
  @IsBoolean()
  active: boolean = true;
}
