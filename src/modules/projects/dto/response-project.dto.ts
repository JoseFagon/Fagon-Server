import { ApiProperty } from '@nestjs/swagger';
import { ProjectType, ProjectStatus } from '@prisma/client';

export class ProjectResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty({ enum: ProjectType })
  projectType!: ProjectType;

  @ApiProperty()
  upeCode!: number;

  @ApiProperty()
  status!: ProjectStatus;

  @ApiProperty({ required: false })
  structureType?: string;

  @ApiProperty({ required: false })
  inspectorName?: string;

  @ApiProperty({ required: false })
  inspectionDate?: Date;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  agency!: {
    id: string;
    name: string;
    agency_number: number;
  };

  @ApiProperty()
  engineer!: {
    id: string;
    name: string;
    specialty: string;
  };
}
