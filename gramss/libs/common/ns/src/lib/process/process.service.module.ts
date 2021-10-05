import { Module } from '@nestjs/common'

import { CommonNsProcessService } from './process.service'

import { CommonNsUtilServiceModule } from '../util/util.service.module'

@Module({
    imports:
    [
        CommonNsUtilServiceModule
    ],
    providers: 
    [
        CommonNsProcessService
    ],
    exports:
    [
        CommonNsProcessService
    ]
})
export class CommonNsProcessServiceModule
{
    
}