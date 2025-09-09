import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AgencyResponseDto } from 'src/modules/agencies/dto/response-agency.dto';
import { ResponseInspectorDto } from 'src/modules/inspectors/dto/response-inspectors.dto';

export class ApproximateDistanceDto {
  @ValidateNested()
  @Type(() => AgencyResponseDto)
  agency!: AgencyResponseDto;

  @ValidateNested()
  @Type(() => ResponseInspectorDto)
  inspector!: ResponseInspectorDto;
}
