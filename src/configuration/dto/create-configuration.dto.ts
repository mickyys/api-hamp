import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateConfigurationDto {
  @IsString()
  @IsOptional()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsBoolean()
  readonly enabled: boolean;

  @IsDate()
  readonly expiredDate: Date;

  @IsNumber()
  readonly alertDays: number;
}
