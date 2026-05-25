import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateResearchDto {
  @IsString()
  title!: string;

  @IsString()
  abstract!: string;

  @IsString()
  technologies!: string;

  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @IsOptional()
  @IsUrl()
  paperUrl?: string;
}
