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

export class CreateLocationDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  projectId!: string;

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  pavementId?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ enum: LocationType })
  @IsEnum(LocationType)
  locationType!: LocationType;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  height?: number;
}
