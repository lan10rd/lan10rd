import { Module } from '@nestjs/common'

import { CommonNsYamlService } from './yaml.service'

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
        CommonNsYamlService
    ],
    exports:
    [
        CommonNsYamlService
    ]
})
export class CommonNsYamlServiceModule
{

}
