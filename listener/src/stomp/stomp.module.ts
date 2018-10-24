import { Module } from '@nestjs/common';
import { StompService } from './stomp.service';

@Module({
  providers: [StompService],
})
export class StompModule {}
