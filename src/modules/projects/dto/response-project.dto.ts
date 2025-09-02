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
  floorHeight?: string;

  @ApiProperty({ required: false })
  inspectorName?: string;

  @ApiProperty({ required: false })
  inspectionDate?: Date;

  @ApiProperty({ required: false })
  technicalResponsibilityNumber?: string;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  agency!: {
    id: string;
    name: string;
    agencyNumber: number;
    cnpj?: string;
    cep: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
  };

  @ApiProperty()
  engineer!: {
    id: string;
    name: string;
  };
}
