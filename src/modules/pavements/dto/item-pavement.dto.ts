import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class PavementItemDto {
  @Expose()
  @ApiProperty({ description: 'Nome do pavimento' })
  @IsNotEmpty()
  pavement!: string;

  @Expose()
  @ApiProperty({ description: 'Altura do pavimento' })
  @IsOptional()
  height?: number;

  @Expose()
  @ApiProperty({ description: 'Área do pavimento' })
  @IsOptional()
  area?: number;
}
