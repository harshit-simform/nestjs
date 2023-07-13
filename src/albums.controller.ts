import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/albums')
export class AlbumsController {
  @Get()
  getAlbums() {
    return 'Photo';
  }
}
