import { Module, HttpModule } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'

import { CommonNsHealthController } from './health.controller'
import { CommonNsHealthServiceModule } from './health.service.module'

@Module
({
    imports:
    [
        TerminusModule,
        HttpModule,
        CommonNsHealthServiceModule
    ],
    controllers:
    [
        CommonNsHealthController
    ],
    providers:
    [
        
    ]
})
export class CommonNsHealthControllerModule
{

}
