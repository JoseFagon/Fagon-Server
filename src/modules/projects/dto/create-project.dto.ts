import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsEnum,
  IsNumber,
  IsArray,
  ValidateNested,
  ArrayMinSize,
  IsNotEmpty,
} from 'class-validator';
import { ProjectType } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { IsUnique } from 'src/common/decorators/is-unique.decorator';

class PavementItemDto {
  @Expose()
  @ApiProperty({ description: 'Nome do pavimento' })
  @IsNotEmpty()
  pavement!: string;
}

export class CreateProjectDto {
  @Expose()
  @ApiProperty({ enum: ProjectType })
  @IsEnum(ProjectType)
  projectType!: ProjectType;

  @Expose()
  @ApiProperty()
  @IsNumber()
  @IsUnique('Project', 'upeCode', {
    message: 'A UPE tem que ser única',
  })
  upeCode!: number;

  @Expose()
  @ApiProperty({ type: [PavementItemDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PavementItemDto)
  pavements!: PavementItemDto[];

  @Expose()
  @ApiProperty()
  @IsUUID()
  agencyId!: string;

  @Expose()
  @ApiProperty()
  @IsUUID()
  engineerId!: string;
}
