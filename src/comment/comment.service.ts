import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';
import { Comment } from './schema/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name)
    private commentModel: mongoose.Model<Comment>,
  ) {}

  async createComment(comment: Comment, user: User): Promise<Comment> {
    const data = Object.assign(comment, {
      user: user._id,
    });

    const res = await this.commentModel.create(data);
    return res;
  }
  async getBookComments(bookId: string): Promise<Comment[]> {
    return await this.commentModel.find({ bookId: bookId }).exec();
  }
}
