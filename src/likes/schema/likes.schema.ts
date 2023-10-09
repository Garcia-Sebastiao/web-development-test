import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schema/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Likes {
  @Prop()
  bookId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const LikesSchema = SchemaFactory.createForClass(Likes);
