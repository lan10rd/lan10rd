import { Module } from '@nestjs/common'

import { CommonNsQrcodeServiceModule } from '../qrcode/qrcode.service.module'

import { CommonNsSpeakeasyService } from './speakeasy.service'

@Module({
    imports:
    [
        CommonNsQrcodeServiceModule
    ],
    providers: 
    [
        CommonNsSpeakeasyService
    ],
    exports:
    [
        CommonNsSpeakeasyService
    ]
})
export class CommonNsSpeakeasyServiceModule
{
    
}