import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class PavementItemDto {
  @Expose()
  @ApiProperty({ description: 'Nome do pavimento' })
  @IsNotEmpty()
  pavement!: string;
}
