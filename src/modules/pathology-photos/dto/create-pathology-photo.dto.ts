import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreatePathologyPhotoDto {
  @ApiProperty()
  @IsUUID()
  pathologyId!: string;

  @ApiProperty()
  @IsString()
  filePath!: string;
}
