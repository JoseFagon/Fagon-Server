import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsUUID, IsNumber, Min } from 'class-validator';
import { ProjectStatus, ProjectType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class SearchProjectDto {
  @Expose()
  @ApiProperty({ enum: ProjectStatus, required: false })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @Expose()
  @ApiProperty({ enum: ProjectType, required: false })
  @IsOptional()
  @IsEnum(ProjectType)
  projectType?: ProjectType;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  agencyId?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  engineerId?: string;

  @Expose()
  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @Expose()
  @ApiProperty({ required: false, default: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number = 10;
}
