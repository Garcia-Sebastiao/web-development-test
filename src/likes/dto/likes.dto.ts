import { User } from '../../auth/schema/user.schema';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class LikeDto {
  @IsNotEmpty()
  @IsString()
  bookId: string;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
