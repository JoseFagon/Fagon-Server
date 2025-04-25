import { IsString, IsEmail, MinLength, ValidateIf } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ValidateIf((o) => !o.accessKeyToken)
  email?: string;

  @IsString()
  @MinLength(6)
  @ValidateIf((o) => !o.accessKeyToken)
  password?: string;

  @IsString()
  @ValidateIf((o) => !o.email && !o.password)
  accessKeyToken?: string;
}
