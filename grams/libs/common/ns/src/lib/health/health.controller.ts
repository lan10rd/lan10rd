import { Controller, Get, Req, Res, HttpService } from '@nestjs/common'
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus'

import { CommonNsHealthService } from './health.service'

@Controller('/common/health/check/')
export class CommonNsHealthController
{

    constructor
    (
        public health: HealthCheckService,
        public httpHealth: HttpHealthIndicator,
        public commonHealth: CommonNsHealthService
    )
    {

    }

    @Get('up')
    @HealthCheck()
    up()
    {
        return {
            health: 'im up!'
        }
    }

    @Get('nestjs')
    @HealthCheck()
    nestjs()
    {
        return this.health.check
        ([
          () => this.httpHealth.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        ])
    }
    
}
