import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { DistanceService, ApproximateDistanceResult } from './distance.service';
import { ApproximateDistanceDto } from './dto/approximate-distance.dto';

@ApiTags('Distance')
@Controller('distance')
export class DistanceController {
  constructor(private readonly distanceService: DistanceService) {}

  @Post('approximate')
  @ApiOperation({
    summary: 'Calcula a distância aproximada entre agência e inspetor',
  })
  @ApiResponse({
    status: 200,
    description: 'Distância aproximada',
    type: Object,
  })
  @ApiBody({ type: ApproximateDistanceDto })
  async calculateApproximateDistance(
    @Body() body: ApproximateDistanceDto,
  ): Promise<ApproximateDistanceResult> {
    if (!body.agency || !body.inspector) {
      throw new HttpException(
        'Agência e inspector são obrigatórios',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.distanceService.calculateApproximateDistance(
      body.agency,
      body.inspector,
    );
  }
}
