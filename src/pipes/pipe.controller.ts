import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Optional,
  Param,
  ParseArrayPipe,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { CustomPipe, ValidatePipe } from './cutom.pipe';
import { AppExceptionFilter } from './exception/aoo-exception.filter';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import {
  PipeError,
  PipeExceptionFilter,
} from './exception/pipeexception.filter';

enum RequestData {
  harshit = 1,
  jeel,
  neckvy,
  aman,
}
import { PipeDTO, PipeDtoClassValidator, PipeSchema } from './pipe.dto';

@Controller('pipe')
export class PipeController {
  //   @Post('/custom')
  //   getCustom(
  //     @Body('name', new CustomPipe({ parseInt: true })) requestData: string,
  //   ) {
  //     console.log(requestData);
  //     return { requestData };
  //   }
  //   @Get('api')
  //   getArray(
  //     @Query('id', new ParseArrayPipe({ items: Number, separator: ',' }))
  //     val: number[],
  //   ) {
  //     console.log('here');
  //     return val;
  //   }
  //   @Get(':id')
  //   getPipe(
  //     @Param(
  //       'id',
  //       new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
  //     )
  //     id: number,
  //   ) {
  //     console.log('heree');
  //     return typeof id;
  //   }
  //   @Put(':id')
  //   updatePipe(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Optional() @Query('val', ParseIntPipe) val: number,
  //   ) {
  //     return { id: typeof id, val: typeof val };
  //   }
  //   @Get('exp/:id')
  //   getexp(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body('name', new ParseEnumPipe(RequestData)) requestData: RequestData,
  //   ) {
  //     return { id, requestData };
  //   }

  //   @Post('api')
  //   validateBody(@Body(new ValidatePipe(PipeSchema)) pipeData: PipeDTO) {
  //     return pipeData;
  //   }
  @Post('api')
  validateBody(
    @Body(new ValidationPipe({ transform: true }))
    pipeData: PipeDtoClassValidator,
  ) {
    return pipeData;
  }
  @Get('/api/:id')
  //   @UseFilters(AppExceptionFilter)
  getError(@Param('id') id: number) {
    if (id <= 0) {
      //   throw new PipeError('Id is invalid');
      throw new BadRequestException('Id is invalid');
    }
  }
}
