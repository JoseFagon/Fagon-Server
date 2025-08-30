import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateInspectorDto {
  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome do vistoriador é obrigatório.' })
  name!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @Length(11, 11, {
    message: 'O telefone deve ter exatamente 11 dígitos.',
  })
  phone!: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  cep?: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O estado é obrigatório.' })
  state!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'A cidade é obrigatória.' })
  city!: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  district?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  street?: string;

  @Expose()
  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  selectedCities?: string[];

  @Expose()
  @ApiProperty({
    required: false,
    description: 'Avaliação do vistoriador (0 a 5).',
  })
  @IsOptional()
  @IsNumber({}, { message: 'A avaliação deve ser numérica.' })
  rating?: number;
}
