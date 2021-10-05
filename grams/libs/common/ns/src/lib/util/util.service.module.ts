import { Module } from '@nestjs/common'

import { CommonNsUtilService } from './util.service'

@Module({
    imports:
    [

    ],
    providers: 
    [
        CommonNsUtilService
    ],
    exports:
    [
        CommonNsUtilService
    ]
})
export class CommonNsUtilServiceModule
{
    
}