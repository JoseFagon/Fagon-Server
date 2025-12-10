import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { Expose, Type } from 'class-transformer';
import {
  IsOptional,
  ValidateNested,
  IsUUID,
  IsNumber,
  IsString,
} from 'class-validator';
import { LocationFinishingInputDto } from '../../../modules/material-finishings/dto/location-finishing-input.dto';

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
  height?: number | null;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  facadeObservation?: string;

  @Expose()
  @ApiProperty({ required: false, type: LocationFinishingInputDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => LocationFinishingInputDto)
  finishes?: LocationFinishingInputDto;
}
