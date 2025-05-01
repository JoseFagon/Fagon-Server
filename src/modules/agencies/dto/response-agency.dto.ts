import { ApiProperty } from '@nestjs/swagger';

export class AgencyResponseDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  agencyNumber!: number;

  @ApiProperty()
  cnpj!: string;

  @ApiProperty()
  cep!: string;

  @ApiProperty()
  state!: string;

  @ApiProperty()
  city!: string;

  @ApiProperty()
  district!: string;

  @ApiProperty()
  street!: string;

  @ApiProperty()
  number!: number;
}
