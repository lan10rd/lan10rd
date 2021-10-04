import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommonNsUtilityServiceModule } from '@lanl0rd/common/ns'

@Module({
  imports: [CommonNsUtilityServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
