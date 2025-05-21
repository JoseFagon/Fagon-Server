import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';
import { ProjectType, ProjectStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class CreateProjectDto {
  @Expose()
  @ApiProperty({ enum: ProjectType })
  @IsEnum(ProjectType)
  projectType!: ProjectType;

  @Expose()
  @ApiProperty()
  @IsNumber()
  upeCode!: number;

  @Expose()
  @ApiProperty()
  @IsUUID()
  agencyId!: string;

  @Expose()
  @ApiProperty()
  @IsUUID()
  engineerId!: string;

  @Expose()
  @ApiProperty({ enum: ProjectStatus })
  @IsEnum(ProjectStatus)
  status!: ProjectStatus;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  structureType?: string;

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
}
