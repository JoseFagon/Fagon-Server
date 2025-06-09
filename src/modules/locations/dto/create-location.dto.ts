import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { LocationType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class CreateLocationDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Expose()
  @ApiProperty({ enum: LocationType })
  @IsEnum(LocationType)
  locationType!: LocationType;
}
