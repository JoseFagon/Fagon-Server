import { IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AgencyResponseDto {
  @ApiProperty({ format: 'uuid' })
  @IsString()
  id!: string;

  @ApiProperty()
  @IsString()
  name!: string;

  @ApiProperty()
  @IsNumber()
  agencyNumber!: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  cnpj?: string;

  @ApiProperty()
  @IsString()
  cep!: string;

  @ApiProperty()
  @IsString()
  state!: string;

  @ApiProperty()
  @IsString()
  city!: string;

  @ApiProperty()
  @IsString()
  district!: string;

  @ApiProperty()
  @IsString()
  street!: string;

  @ApiProperty()
  @IsNumber()
  number!: number;

  @ApiProperty()
  @IsDate()
  createdAt!: Date;
}
