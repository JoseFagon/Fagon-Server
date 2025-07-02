import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

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
  photos!: Express.Multer.File[];
}
