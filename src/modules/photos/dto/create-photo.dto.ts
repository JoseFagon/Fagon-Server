import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePhotoDto {
  @Expose()
  @ApiProperty()
  @IsUUID()
  locationId!: string;

  @Expose()
  @ApiProperty()
  @IsString()
  filePath!: string;

  @Expose()
  @ApiProperty()
  @IsBoolean()
  selectedForPdf!: boolean | undefined;

  @Expose()
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
}
