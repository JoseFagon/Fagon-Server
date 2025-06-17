import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsNumber, Min, IsString } from 'class-validator';
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
  @IsString()
  upeCode?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  inspectorName?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  agencyNumber?: number;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  engineerName?: string;

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
