import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

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
  education?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  registrationNumber?: string;
}
