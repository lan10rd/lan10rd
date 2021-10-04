import { Module } from '@nestjs/common'

import { CommonNsDataBasesMongoService } from './mongo.service'

import { CommonNsLoggerServiceModule } from '../../../logger/logger.service.module'

@Module
({
    imports:
    [
        CommonNsLoggerServiceModule
    ],
    controllers:
    [

    ],
    providers:
    [
        CommonNsDataBasesMongoService
    ],
    exports:
    [
        CommonNsDataBasesMongoService
    ]
})
export class CommonNsDataBasesMongoServiceModule
{

}
