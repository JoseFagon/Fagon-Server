import { PartialType } from '@nestjs/swagger';
import { CreateMaterialFinishingDto } from './create-material-finishing.dto';

export class UpdateMaterialFinishingDto extends PartialType(
  CreateMaterialFinishingDto,
) {}
