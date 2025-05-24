import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsEnum, IsNumber } from 'class-validator';
import { ProjectType } from '@prisma/client';
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
}
