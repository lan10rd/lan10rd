import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommonNsHttpControllerModule } from '@grams/common/ns'

@Module({
  imports: [CommonNsHttpControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
