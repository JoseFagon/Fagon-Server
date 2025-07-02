import { ApiProperty } from '@nestjs/swagger';
import { Location, PathologyPhoto, Project } from '@prisma/client';

export class PathologyResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  referenceLocation!: string;

  @ApiProperty()
  title!: string;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  recordDate!: Date;

  @ApiProperty()
  project!: Project;

  @ApiProperty()
  location!: Location;

  @ApiProperty()
  photos!: PathologyPhoto[];
}
