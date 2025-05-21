import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';

export class CreatePathologyPhotoDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  pathologyId!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  filePath!: string;
}
