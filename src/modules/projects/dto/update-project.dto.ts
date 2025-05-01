import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsOptional, IsEnum, IsDateString, IsString } from 'class-validator';
import { ProjectStatus } from 'src/generated/@prisma/client';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

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
