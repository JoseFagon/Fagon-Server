import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PathologyPhotoResponseDto {
  @Expose()
  @ApiProperty()
  id!: string;

  @Expose()
  @ApiProperty()
  name?: string;

  @Expose()
  @ApiProperty()
  filePath!: string;

  @Expose()
  @ApiProperty()
  pathologyId!: string;

  @Expose()
  @ApiProperty()
  createdAt!: Date;

  @Expose()
  @ApiProperty({ required: false })
  signedUrl?: string;

  @Expose()
  @ApiProperty()
  pathology!: {
    id: string;
    name: string;
    project: {
      id: string;
      upeCode: string;
    };
  };
}
