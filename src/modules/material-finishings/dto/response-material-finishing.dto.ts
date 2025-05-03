import { ApiProperty } from '@nestjs/swagger';
import { SurfaceType } from 'src/generated/@prisma/client';

export class MaterialFinishingResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  locationId!: string;

  @ApiProperty({ enum: SurfaceType })
  surface!: SurfaceType;

  @ApiProperty()
  materialFinishing!: string;

  @ApiProperty()
  location!: {
    id: string;
    name: string;
  };
}
