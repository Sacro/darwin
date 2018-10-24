import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { StompModule } from '../stomp/stomp.module';

@Module({
  imports: [ConfigModule, StompModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
