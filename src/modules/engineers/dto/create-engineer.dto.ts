import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateEngineerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome do engenheiro é obrigatório.' })
  name!: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({ message: 'O email do engenheiro é obrigatório.' })
  email!: string;

  @ApiProperty()
  @IsString()
  @Length(11, 11, { message: 'O telefone deve ter exatamente 11 caracteres.' })
  phone!: string;

  @ApiProperty()
  @IsString()
  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 caracteres.' })
  cpf!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'A formação do engenheiro é obrigatória.' })
  education!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O número do registro é obrigatório.' })
  registrationNumber!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'A entidade do registro é obrigatória.' })
  registrationEntity!: string;
}
