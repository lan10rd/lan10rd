import { Module } from '@nestjs/common'

import { CommonNsDockerService } from './docker.service'
import { CommonNsDockerCliService } from './cli/cli.service'
import { CommonNsDockerApiService } from './api/api.service'

import { CommonNsProcessServiceModule } from '../process/process.service.module'
import { CommonNsJsonServiceModule } from '../json/json.service.module'
import { CommonNsYamlServiceModule } from '../yaml/yaml.service.module'

import { CommonNsLoggerServiceModule } from '../logger/logger.service.module'

@Module
({
    imports:
    [
        CommonNsProcessServiceModule,
        CommonNsJsonServiceModule,
        CommonNsYamlServiceModule,
        CommonNsLoggerServiceModule
    ],
    controllers:
    [

    ],
    providers:
    [
        CommonNsDockerService,
        CommonNsDockerCliService,
        CommonNsDockerApiService
    ],
    exports:
    [
        CommonNsDockerService,
        CommonNsDockerCliService,
        CommonNsDockerApiService
    ]
})
export class CommonNsDockerServiceModule
{

}

