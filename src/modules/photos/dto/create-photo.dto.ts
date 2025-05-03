import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreatePhotoDto {
  @ApiProperty()
  @IsUUID()
  locationId!: string;

  @ApiProperty()
  @IsString()
  filePath!: string;

  @ApiProperty()
  @IsBoolean()
  selectedForPdf!: boolean;
}
