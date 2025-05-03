import { PartialType } from '@nestjs/swagger';
import { CreateStateLawDto } from './create-state-law.dto';

export class UpdateStateLawDto extends PartialType(CreateStateLawDto) {}
