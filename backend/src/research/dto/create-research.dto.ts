import { IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateResearchDto {
  @IsString()
  @MaxLength(150)
  title!: string;

  @IsString()
  @MaxLength(4000)
  description!: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @IsUrl()
  link?: string;

  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  technologies?: string;
}
