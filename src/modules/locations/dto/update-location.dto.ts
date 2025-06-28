import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { Expose, Type } from 'class-transformer';
import { IsOptional, ValidateNested, IsUUID, IsNumber } from 'class-validator';
import { LocationFinishingInputDto } from 'src/modules/material-finishings/dto/location-finishing-input.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  pavementId?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  height?: number;

  @Expose()
  @ApiProperty({ required: false, type: LocationFinishingInputDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => LocationFinishingInputDto)
  finishes?: LocationFinishingInputDto;
}
