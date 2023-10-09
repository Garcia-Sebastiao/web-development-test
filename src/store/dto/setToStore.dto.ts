import { User } from '../../auth/schema/user.schema';

import {
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsEnum,
} from 'class-validator';
export class setToStoreDto {
  @IsNotEmpty()
  @IsString()
  readonly bookId: string;

  @IsNotEmpty()
  @IsString()
  readonly authorId: string;

  @IsEmpty({message: 'You cannot pass user id'})
  readonly storeId: User;
}
