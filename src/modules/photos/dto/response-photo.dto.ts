import { ApiProperty } from '@nestjs/swagger';

export class PhotoResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  locationId!: string;

  @ApiProperty()
  filePath!: string;

  @ApiProperty()
  selectedForPdf!: boolean;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  signedUrl?: string;

  @ApiProperty()
  location!: {
    id: string;
    name: string;
  };
}
