import { ApiProperty } from '@nestjs/swagger';

export class PavementResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  projectId!: string;

  @ApiProperty()
  pavement!: string;

  @ApiProperty()
  height!: number;

  @ApiProperty()
  area?: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
