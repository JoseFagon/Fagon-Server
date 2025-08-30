import { IsString, IsNotEmpty } from 'class-validator';

export class CalculateDistanceDto {
  @IsString()
  @IsNotEmpty()
  origin!: string;

  @IsString()
  @IsNotEmpty()
  destination!: string;
}
