import { IsOptional, IsString } from 'class-validator';

export class CreateHobbyDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  image?: string;
}
