import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  name!: string;

  @IsString()
  category!: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsInt()
  @Min(0)
  @Max(100)
  proficiency!: number;
}
