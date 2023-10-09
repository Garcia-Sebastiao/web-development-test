import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LikesSchema } from './schema/likes.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Likes', schema: LikesSchema }]),
  ],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
