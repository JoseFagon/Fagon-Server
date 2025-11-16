import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Expose()
  @ApiProperty()
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  name!: string;

  @Expose()
  @ApiProperty()
  @IsEmail(
    {},
    {
      message: 'Por favor, insira um email válido (ex: usuario@provedor.com)',
    },
  )
  @IsNotEmpty({ message: 'O email não pode estar vazio' })
  email!: string;

  @Expose()
  @ApiProperty()
  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @MinLength(4, { message: 'A senha deve ter no mínimo 4 caracteres' })
  password!: string;
}
