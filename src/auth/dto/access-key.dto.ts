import { IsUUID, IsNotEmpty, IsEmail } from 'class-validator';
export class AccessKeyDto {
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
