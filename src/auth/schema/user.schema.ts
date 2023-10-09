import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Role {
  USER = 'Usuario',
  AUTHOR = 'Escritor',
  STORE = 'Loja',
}

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  full_name: string;

  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
