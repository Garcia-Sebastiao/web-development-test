import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Store } from './schema/store.schema';
import { StoreService } from './store.service';
import { AuthGuard } from '@nestjs/passport';
import { setToStoreDto } from './dto/setToStore.dto';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post('set_book')
  @UseGuards(AuthGuard())
  async setBook(
    @Body()
    store: setToStoreDto,
    @Req() req,
  ): Promise<Store> {
    return await this.storeService.setBookToStore(store, req.user);
  }

  @Delete('remove_book/:bookId')
  @UseGuards(AuthGuard())
  async removeBook(
    @Param('bookdId')
    bookId: string,
    @Param('storeId')
    storeId: string,
  ): Promise<Store> {
    return this.storeService.removeBookFromStore(bookId);
  }

  @Get("get_store_books/:id")
  @UseGuards(AuthGuard())
  async viewStoreBooks(
    @Param('id')
    storeId: string
  ) : Promise<Store[]>
  {
    return await this.storeService.findStoreBooks(storeId);
  }
}
