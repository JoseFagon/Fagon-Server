import { ApiProperty } from '@nestjs/swagger';
import { LocationType } from '@prisma/client';

export class LocationResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  projectId!: string;

  @ApiProperty({ required: false })
  pavementId?: string;

  @ApiProperty()
  name!: string;

  @ApiProperty({ enum: LocationType })
  locationType!: LocationType;

  @ApiProperty({ required: false })
  height?: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
