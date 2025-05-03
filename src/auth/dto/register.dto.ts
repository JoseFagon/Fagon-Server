import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { ROLES } from 'src/common/constants/roles.constant';
import { CameraType, UserRole } from 'src/generated/@prisma/client';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @ApiProperty({ required: false })
  @IsEnum(CameraType)
  @ValidateIf((o) => o.role === ROLES.VISTORIADOR)
  cameraType?: CameraType;

  @ApiProperty()
  @IsEnum(UserRole)
  role!: UserRole;
}
