import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  techStack!: string;

  @IsOptional()
  @IsString()
  githubUrl?: string;

  @IsOptional()
  @IsString()
  liveUrl?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsBoolean()
  featured!: boolean;
}
