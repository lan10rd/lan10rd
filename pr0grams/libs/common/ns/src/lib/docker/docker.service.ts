import { Injectable } from '@nestjs/common'

import { CommonNsDockerCliService } from './cli/cli.service'
import { CommonNsDockerApiService } from './api/api.service'

@Injectable()
export class CommonNsDockerService
{

    constructor
    (
        public api: CommonNsDockerApiService,
        public cli: CommonNsDockerCliService
    )
    {

    }

}