import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  Length,
  IsNotEmpty,
  IsInt,
  Min,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateAgencyDto {
  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome da agência é obrigatório.' })
  name!: string;

  @Expose()
  @ApiProperty()
  @IsNumber()
  @IsInt({ message: 'O número da agência deve ser um inteiro.' })
  @Min(1, { message: 'O número da agência deve ser maior que zero.' })
  agencyNumber!: number;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Length(14, 14, { message: 'O CNPJ deve ter exatamente 14 caracteres.' })
  cnpj?: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @Length(8, 8, { message: 'O CEP deve ter exatamente 8 caracteres.' })
  cep!: string;

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
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O bairro é obrigatório.' })
  district!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'A rua é obrigatória.' })
  street!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O número é obrigatório.' })
  @MaxLength(20, { message: 'O número não pode exceder 20 caracteres.' })
  @Matches(/^[A-Za-z0-9/\-\s]+$/, {
    message:
      'O número deve conter apenas letras, números, barras, hífens ou espaços.',
  })
  number!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsOptional()
  complement?: string;
}
