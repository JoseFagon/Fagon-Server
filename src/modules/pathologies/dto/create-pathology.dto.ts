import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreatePathologyDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  projectId!: string;

  @Expose()
  @ApiProperty()
  @IsUUID()
  locationId!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  referenceLocation!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description!: string;

  @Expose()
  @ApiProperty()
  @IsDateString()
  recordDate!: string;

  @Expose()
  @ApiProperty({
    required: false,
    type: 'array',
    items: { type: 'string', format: 'binary' },
  })
  @IsOptional()
  photos?: Express.Multer.File[];
}
