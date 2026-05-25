import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(10)
  message!: string;
}
