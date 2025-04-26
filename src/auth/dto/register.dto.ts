import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { ROLES } from 'src/common/constants/roles.constant';
import { CameraType, UserRole } from 'src/generated/client';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsEnum(CameraType)
  @ValidateIf((o) => o.role === ROLES.VISTORIADOR)
  cameraType?: CameraType;

  @IsEnum(UserRole)
  role!: UserRole;
}
