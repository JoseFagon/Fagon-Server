import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, ValidateIf } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: false })
  @IsEmail()
  @ValidateIf((o) => !o.accessKeyToken)
  email?: string;

  @ApiProperty({ required: false })
  @IsString()
  @MinLength(6)
  @ValidateIf((o) => !o.accessKeyToken)
  password?: string;

  @ApiProperty({ required: false })
  @IsString()
  @ValidateIf((o) => !o.email && !o.password)
  accessKeyToken?: string;
}
