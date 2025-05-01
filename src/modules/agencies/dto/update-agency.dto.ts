import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  Length,
  IsInt,
  Min,
  IsNotEmpty,
} from 'class-validator';

export class UpdateAgencyDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'O nome da agência não pode ser vazio.' })
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @IsInt({ message: 'O número da agência deve ser um inteiro.' })
  @Min(1, { message: 'O número da agência deve ser maior que zero.' })
  agencyNumber?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Length(14, 14, { message: 'CNPJ deve ter exatamente 14 caracteres.' })
  cnpj?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Length(8, 8, { message: 'CEP deve ter exatamente 8 caracteres.' })
  cep?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'O estado não pode ser vazio.' })
  state?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'A cidade não pode ser vazia.' })
  city?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'O bairro não pode ser vazio.' })
  district?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'A rua não pode ser vazia.' })
  street?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @IsInt({ message: 'O número deve ser um inteiro.' })
  @Min(1, { message: 'O número deve ser maior que zero.' })
  number?: number;
}
