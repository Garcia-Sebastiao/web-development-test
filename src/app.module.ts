import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { StoreModule } from './store/store.module';
import { LikesModule } from './likes/likes.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MulterModule.register({ dest: './assets/books/' }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    BookModule,
    AuthModule,
    CommentModule,
    StoreModule,
    LikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
