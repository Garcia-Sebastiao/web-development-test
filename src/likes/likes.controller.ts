import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { AuthGuard } from '@nestjs/passport';
import { LikeDto } from './dto/likes.dto';
import { Likes } from './schema/likes.schema';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post('like_book')
  @UseGuards(AuthGuard())
  async likeBook(
    @Body()
    like: LikeDto,
    @Req() req,
  ): Promise<Likes> {
    return this.likesService.setLike(like, req.user);
  }

  @Get('get_likes/:bookId')
  @UseGuards(AuthGuard())
  async getLikes(
    @Param('bookId')
    bookId: string,
  ): Promise<Likes[]> {
    return this.likesService.getLikes(bookId);
  }

  @Delete('delete_like/:userId/:bookId')
  @UseGuards(AuthGuard())
  async deleteBook(
    @Param('userId')
    userId: string,
    @Param('bookId')
    bookId: string,
  ): Promise<Likes> {
    return this.likesService.deleteLike(userId, bookId);
  }

  @Get('get_user_like/:userId/:bookId')
  @UseGuards(AuthGuard())
  async getUserLike(
    @Param('userId')
    userId: string,
    @Param('bookId')
    bookId: string,
  ): Promise<Likes> {
    return this.likesService.findByUserId(userId, bookId);
  }
}
