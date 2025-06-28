import {
  Agency,
  Engineer,
  Location,
  MaterialFinishing,
  Pavement,
  Photo,
  ProjectStatus,
  ProjectType,
} from '@prisma/client';

export interface ProjectWithIncludes {
  id: string;
  upeCode: number;
  projectType: ProjectType;
  status: ProjectStatus;
  structureType: string;
  floorHeight: number;
  inspectorName?: string;
  inspectionDate?: Date;
  createdAt: Date;
  agency: Agency;
  engineer: Engineer;
  pavement: Pavement[];
  location: (Location & {
    photo: Photo[];
    materialFinishing: MaterialFinishing[];
  })[];
}
