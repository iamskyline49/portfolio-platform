import { IsString, MaxLength } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  @MaxLength(100)
  category!: string;

  @IsString()
  @MaxLength(100)
  name!: string;
}
