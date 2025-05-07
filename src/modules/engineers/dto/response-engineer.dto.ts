import { ApiProperty } from '@nestjs/swagger';

export class EngineerResponseDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  phone!: string;

  @ApiProperty()
  cpf!: string;

  @ApiProperty()
  education!: string;

  @ApiProperty()
  registrationNumber!: string;

  @ApiProperty()
  registrationEntity!: string;
}
