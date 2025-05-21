import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsEnum } from 'class-validator';
import { CameraType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class AccessKeyDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @Expose()
  @ApiProperty()
  @IsEnum(CameraType)
  @IsNotEmpty()
  cameraType!: CameraType;
}
