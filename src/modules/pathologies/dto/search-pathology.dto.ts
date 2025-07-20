import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsOptional,
  IsString,
  IsDateString,
  IsNumber,
  Min,
} from 'class-validator';

export class SearchPathologyDto {
  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @Expose()
  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @Expose()
  @ApiProperty({ required: false, default: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number = 10;
}
