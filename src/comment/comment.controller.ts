import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schema/comment.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post('create_comment')
  @UseGuards(AuthGuard())
  async createComment(
    @Body()
    comment: CreateCommentDto,
    @Req() req,
  ): Promise<Comment> {
    return this.commentService.createComment(comment, req.user);
  }

  @Get('get_book_comments/:bookId')
  @UseGuards(AuthGuard())
  async getComments(
    @Param('bookId')
    bookId: string,
  ): Promise<Comment[]> {
    return this.commentService.getBookComments(bookId);
  }
}
