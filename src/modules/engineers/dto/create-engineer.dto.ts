import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, Length, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateEngineerDto {
  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome do engenheiro é obrigatório.' })
  name!: string;

  @Expose()
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({ message: 'O email do engenheiro é obrigatório.' })
  email!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @Length(11, 11, { message: 'O telefone deve ter exatamente 11 caracteres.' })
  phone!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 caracteres.' })
  cpf!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'A formação do engenheiro é obrigatória.' })
  education!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O número do registro é obrigatório.' })
  registrationNumber!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'A entidade do registro é obrigatória.' })
  registrationEntity!: string;
}
