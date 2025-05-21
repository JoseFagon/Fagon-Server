import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsUUID, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePavementDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pavement!: string;

  @Expose()
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  height!: number;

  @Expose()
  @ApiProperty({ required: false })
  @IsNumber()
  area?: number;
}
