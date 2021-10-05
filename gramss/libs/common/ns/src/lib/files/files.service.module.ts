import { Module } from '@nestjs/common'

import { CommonNsFilesService } from './files.service'

@Module
({
    imports:
    [

    ],
    controllers:
    [

    ],
    providers:
    [
        CommonNsFilesService
    ],
    exports:
    [
        CommonNsFilesService
    ]
})
export class CommonNsFilesServiceModule
{

}
