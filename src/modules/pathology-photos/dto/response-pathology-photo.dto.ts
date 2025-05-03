import { ApiProperty } from '@nestjs/swagger';

export class PathologyPhotoResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  pathologyId!: string;

  @ApiProperty()
  filePath!: string;

  @ApiProperty()
  url!: string;
}
