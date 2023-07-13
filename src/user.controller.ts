import {
  Controller,
  Get,
  Req,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  Headers,
  Post,
  Body,
  Ip,
  Redirect,
  Inject,
} from '@nestjs/common';

import { UserService } from './user.service';

import { Request } from 'express';
import { createUSerDto } from './dto';

// interface ImageParams {
//   name: string;
//   anime: string;
// }

@Controller('/users')
export class UsersController {
  constructor(
    private userService: UserService,
    @Inject('DATABASE_NAME') private dbname: string,
    @Inject('Database_connection') databaseConnection: string,
  ) {
    console.log('usercontorller');
    // console.log(dbname);
    // console.log(databaseConnection);
    // this.print1();
  }
  print1() {
    console.log(this.dbname);
  }
  // @Get('/profile')
  // @HttpCode(HttpStatus.CREATED)
  // getProfile(@Req() req: Request) {
  //   return 'Hello Harshit';
  // }
  // @Get('/videos/:id')
  // getVideos(@Param() params: Record<string, number>) {
  //   console.log(typeof params.id);
  //   return 'success';
  // }
  // getVideos(@Param('id') param: number) {
  //   console.log(param);
  //   return {
  //     param,
  //   };
  // }
  // @Get('/images')
  // getImages(@Query() query: Record<string, string>) {
  //   console.log(query);
  //   return 'success';
  // }
  // getImages(@Query('name') query: string) {
  //   console.log(query);
  //   return 'success';
  // }
  // getImages(@Query() query: ImageParams) {
  //   console.log(query.name, query.anime);
  //   return 'success';
  // }
  // @Get('/headers')
  // getHeaders(@Headers() headers: Record<string, string>) {
  //   console.log(headers);
  //   return 'success';
  // }
  // @Post('/videos')
  // addVideo(@Body() requestData: Record<string, string>) {
  //   return requestData;
  // }
  // @Get('/ip')
  // getIp(@Ip() Ip: string) {
  //   return Ip;
  // }
  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }

  @Get()
  getAllUsers() {
    return this.userService.findAllUser();
  }
  @Post()
  createUser(@Body() requestData: createUSerDto) {
    this.userService.create(requestData);
    return this.getAllUsers();
  }
}
