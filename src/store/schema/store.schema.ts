import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schema/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Store {
  @Prop()
  bookId: string;

  @Prop()
  authorId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  storeId: User;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
