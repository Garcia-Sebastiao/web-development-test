import { Book } from 'src/book/schemas/book.schema';
import { User } from '../../auth/schema/user.schema';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  bookId: string;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
