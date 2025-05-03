import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsEmail } from 'class-validator';

export class AccessKeyDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
