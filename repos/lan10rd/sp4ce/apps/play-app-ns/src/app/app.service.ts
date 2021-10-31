import { Injectable } from '@nestjs/common';

import { CommonNsUtilityService } from '@lanl0rd/common/ns'

@Injectable()
export class AppService {

  constructor(public util: CommonNsUtilityService){

  }

  getData(): { message: string } {
    return { message: 'Welcome to play-app-ns!' };
  }
}
