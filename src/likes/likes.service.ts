import { Injectable } from '@nestjs/common';
import { Likes } from './schema/likes.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Likes.name)
    private likesModel: mongoose.Model<Likes>,
  ) {}

  async setLike(like: Likes, user: User): Promise<Likes> {
    const existingLike = await this.likesModel.findOne({ user: user._id });

    if (existingLike) {
      console.log('Already liked');
    }
    const data = Object.assign(like, {
      user: user._id,
    });

    const res = await this.likesModel.create(data);
    return res;
  }

  async getLikes(bookId: string): Promise<Likes[]> {
    return await this.likesModel.find({ bookId: bookId }).exec();
  }

  async deleteLike(userId: string, bookId: string): Promise<Likes> {
    return this.likesModel
      .findOneAndDelete({ bookId: bookId, user: userId })
      .exec();
  }

  async findByUserId(userId: string, bookId: string): Promise<Likes> {
    return this.likesModel.findOne({ user: userId, bookId: bookId }).exec();
  }
}
