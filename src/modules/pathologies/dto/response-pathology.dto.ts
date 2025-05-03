import { ApiProperty } from '@nestjs/swagger';

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
  project!: {
    id: string;
    upeCode: number;
  };

  @ApiProperty()
  location!: {
    id: string;
    name: string;
    coordinates: string;
  };
}
