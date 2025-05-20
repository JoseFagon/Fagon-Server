import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsEnum } from 'class-validator';
import { CameraType } from '@prisma/client';

export class AccessKeyDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @ApiProperty()
  @IsEnum(CameraType)
  @IsNotEmpty()
  cameraType!: CameraType;
}
