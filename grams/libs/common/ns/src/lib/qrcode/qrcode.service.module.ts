import { Module } from '@nestjs/common'

import { CommonNsQrcodeService } from './qrcode.service'

@Module({
    imports:
    [

    ],
    providers: 
    [
        CommonNsQrcodeService
    ],
    exports:
    [
        CommonNsQrcodeService
    ]
})
export class CommonNsQrcodeServiceModule
{
    
}