import { Role } from '../schema/user.schema';
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly full_name: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsEnum(Role, { message: 'Please choose a valid role' })
  readonly role: Role;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
