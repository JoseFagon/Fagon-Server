import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePathologyPhotoDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  pathologyId!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  filePath!: string;

  @Expose()
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
}
