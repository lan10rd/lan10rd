import { Module } from '@nestjs/common'

import { CommonNsSchedulerService } from './scheduler.service'

import { ScheduleModule } from '@nestjs/schedule'

@Module
({
    imports:
    [
        ScheduleModule.forRoot()
    ],
    controllers:
    [

    ],
    providers:
    [
        CommonNsSchedulerService
    ],
    exports:
    [
        CommonNsSchedulerService
    ]
})
export class CommonNsSchedulerServiceModule
{

}
