import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsOptional,
  IsString,
  Min,
  Length,
  IsNumberString,
} from 'class-validator';

export class SearchAgencyDto {
  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Length(1, 100, { message: 'Nome deve ter entre 1 e 100 caracteres' })
  name?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumberString()
  @Min(1)
  agencyNumber?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Length(2, 100, { message: 'Cidade deve ter entre 2 e 100 caracteres' })
  city?: string;
}
