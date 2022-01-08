import { Module } from '@nestjs/common'

import { CommonNsLoggerService } from './logger.service'

import { CommonNsJsonServiceModule } from '../json/json.service.module'

@Module({
    imports:
    [
        CommonNsJsonServiceModule
    ],
    providers: 
    [
        CommonNsLoggerService
    ],
    exports:
    [
        CommonNsLoggerService
    ]
})
export class CommonNsLoggerServiceModule
{
    
}