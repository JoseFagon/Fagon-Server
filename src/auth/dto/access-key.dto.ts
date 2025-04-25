import { IsUUID, IsEnum } from 'class-validator';
import { CameraType } from 'src/generated/client';

export class AccessKeyDto {
  @IsEnum(CameraType)
  cameraType!: CameraType;

  @IsUUID()
  projectId!: string;
}
