import { Module } from '@nestjs/common'

import { CommonNsQueryStringService } from './query-string.service'

import { CommonNsFilesServiceModule } from '../files/files.service.module'

@Module
({
    imports:
    [
        CommonNsFilesServiceModule
    ],
    controllers:
    [

    ],
    providers:
    [
        CommonNsQueryStringService
    ],
    exports:
    [
        CommonNsQueryStringService
    ]
})
export class CommonNsQueryStringServiceModule
{

}
