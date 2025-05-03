import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePavementDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pavement!: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  height!: number;

  @ApiProperty({ required: false })
  @IsNumber()
  area?: number;
}
