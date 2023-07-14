import { Module } from '@nestjs/common';
import { PipeController } from './pipe.controller';

@Module({
  controllers: [PipeController],
  exports: [PipeModule],
})
export class PipeModule {}
