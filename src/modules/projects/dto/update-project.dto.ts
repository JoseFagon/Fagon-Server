import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PavementItemDto } from '../../../modules/pavements/dto/item-pavement.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @Expose()
  @ApiProperty({ enum: ProjectStatus })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @Expose()
  @ApiProperty({ type: [PavementItemDto], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PavementItemDto)
  pavements?: PavementItemDto[];

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  structureType?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  floorHeight?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  inspectorName?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  inspectionDate?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  technicalResponsibilityNumber?: string;
}
