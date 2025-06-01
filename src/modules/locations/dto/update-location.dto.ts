import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { Expose, Type } from 'class-transformer';
import { IsOptional, ValidateNested, IsArray } from 'class-validator';
import { CreateMaterialFinishingDto } from 'src/modules/material-finishings/dto/create-material-finishing.dto';
import { CreatePavementDto } from 'src/modules/pavements/dto/create-pavement.dto';

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
  @ApiProperty({ required: false, type: CreatePavementDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePavementDto)
  pavement?: CreatePavementDto;

  @Expose()
  @ApiProperty({ required: false, type: [CreateMaterialFinishingDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMaterialFinishingDto)
  materialFinishings?: CreateMaterialFinishingDto[];
}
