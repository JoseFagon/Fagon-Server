import { ApiProperty } from '@nestjs/swagger';
import { CameraType, UserRole } from 'src/generated/@prisma/client';

export class UserResponseDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty({ enum: UserRole })
  role!: UserRole;

  @ApiProperty()
  status!: boolean;

  @ApiProperty({ required: false })
  cameraType?: CameraType;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
