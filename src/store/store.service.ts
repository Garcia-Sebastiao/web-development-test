import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from './schema/store.schema';
import mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store.name)
    private storeModel: mongoose.Model<Store>,
  ) {}

  async setBookToStore(store: Store, user: User): Promise<Store> {
    const data = Object.assign(store, {
      storeId: user._id,
    });

    const res = await this.storeModel.create(data);
    return res;
  }

  async removeBookFromStore(bookId: string): Promise<Store> {
    return await this.storeModel.findOneAndDelete({ bookId: bookId }).exec();
  }

  async findStoreBooks(id: string): Promise<Store[]> {
    return await this.storeModel.find({ storeId: id }).exec();
  }
}
