import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePavementDto } from './create-pavement.dto';
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class UpdatePavementDto extends PartialType(CreatePavementDto) {
  @Expose()
  @ApiProperty({ required: false })
  @IsNumber()
  area?: number;
}
