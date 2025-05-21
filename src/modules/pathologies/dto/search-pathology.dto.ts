import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsDateString } from 'class-validator';

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
}
