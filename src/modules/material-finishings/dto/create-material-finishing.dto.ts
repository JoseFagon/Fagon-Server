import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsNotEmpty } from 'class-validator';
import { SurfaceType } from 'src/generated/@prisma/client';

export class CreateMaterialFinishingDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  locationId!: string;

  @ApiProperty({ enum: SurfaceType })
  @IsNotEmpty()
  surface!: SurfaceType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  materialFinishing!: string;
}
