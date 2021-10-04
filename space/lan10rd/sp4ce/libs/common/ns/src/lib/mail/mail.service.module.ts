import { Module } from '@nestjs/common'

import { CommonNsMailService } from './mail.service'

@Module({
    imports:
    [

    ],
    providers: 
    [
        CommonNsMailService
    ],
    exports:
    [
        CommonNsMailService
    ]
})
export class CommonNsMailServiceModule
{
    
}