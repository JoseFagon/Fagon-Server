import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { LocationType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class CreateLocationDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @Expose()
  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  pavementId?: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Expose()
  @ApiProperty({ enum: LocationType })
  @IsEnum(LocationType)
  locationType!: LocationType;

  @Expose()
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  height?: number;
}
