import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class SearchEngineerDto {
  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  education?: string;

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
