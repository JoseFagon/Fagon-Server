import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @Expose()
  @ApiProperty({ enum: ProjectStatus })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

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
