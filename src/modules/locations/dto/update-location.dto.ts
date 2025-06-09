import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { Expose, Type } from 'class-transformer';
import {
  IsOptional,
  ValidateNested,
  IsArray,
  IsUUID,
  IsNumber,
} from 'class-validator';
import { CreateMaterialFinishingDto } from 'src/modules/material-finishings/dto/create-material-finishing.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  @Expose()
  @ApiProperty({
    required: false,
    type: 'string',
    format: 'binary',
    description: 'Array de fotos para upload',
  })
  @IsOptional()
  photos?: Express.Multer.File[];

  @Expose()
  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  existingPhotos?: string[];

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
  @ApiProperty({ required: false, type: [CreateMaterialFinishingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMaterialFinishingDto)
  materialFinishings?: CreateMaterialFinishingDto[];
}
