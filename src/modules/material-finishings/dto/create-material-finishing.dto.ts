import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsNotEmpty } from 'class-validator';
import { SurfaceType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class CreateMaterialFinishingDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  locationId!: string;

  @Expose()
  @ApiProperty({ enum: SurfaceType })
  @IsNotEmpty()
  surface!: SurfaceType;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  materialFinishing!: string;
}
