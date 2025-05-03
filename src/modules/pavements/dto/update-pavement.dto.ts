import { PartialType } from '@nestjs/swagger';
import { CreatePavementDto } from './create-pavement.dto';

export class UpdatePavementDto extends PartialType(CreatePavementDto) {}
