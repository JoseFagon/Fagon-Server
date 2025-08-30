import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsArray, IsNumber, Min } from 'class-validator';

export class SearchInspectorDto {
  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @Expose()
  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  selectedCities?: string[];

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
