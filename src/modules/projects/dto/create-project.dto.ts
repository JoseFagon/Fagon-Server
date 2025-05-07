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

export class CreateProjectDto {
  @ApiProperty({ enum: ProjectType })
  @IsEnum(ProjectType)
  projectType!: ProjectType;

  @ApiProperty()
  @IsNumber()
  upeCode!: number;

  @ApiProperty()
  @IsUUID()
  agencyId!: string;

  @ApiProperty()
  @IsUUID()
  engineerId!: string;

  @ApiProperty({ enum: ProjectStatus })
  @IsEnum(ProjectStatus)
  status!: ProjectStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  structureType?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  inspectorName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  inspectionDate?: string;
}
