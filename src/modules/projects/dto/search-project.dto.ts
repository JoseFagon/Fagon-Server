import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsUUID, IsNumber, Min } from 'class-validator';
import { ProjectStatus, ProjectType } from '@prisma/client';

export class SearchProjectDto {
  @ApiProperty({ enum: ProjectStatus, required: false })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @ApiProperty({ enum: ProjectType, required: false })
  @IsOptional()
  @IsEnum(ProjectType)
  projectType?: ProjectType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  agencyId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  engineerId?: string;

  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ required: false, default: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number = 10;
}
