import { Module } from '@nestjs/common'

import { CommonNsOsService } from './os.service'

@Module({
    imports:
    [

    ],
    providers: 
    [
        CommonNsOsService
    ],
    exports:
    [
        CommonNsOsService
    ]
})
export class CommonNsOsServiceModule
{
    
}