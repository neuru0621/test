import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'common/exception/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  getAllCat() {
    throw new HttpException('api is broken', 404); //일반 Error처리 메세지
    // return 'get all cat api';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  //   @Put(':id')
  //   updateCat() {
  //     return 'update cat';
  //   }

  //   @Patch(':id')
  //   updatePartialCat() {
  //     return 'update';
  //   }

  //   @Delete(':id')
  //   deleteCat() {
  //     return 'delete';
  //   }
}
