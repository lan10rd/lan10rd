import { Injectable } from '@nestjs/common'

import { CommonNsProcessService } from '../../process/process.service'
import { CommonNsJsonService } from '../../json/json.service'
import { CommonNsYamlService } from '../../yaml/yaml.service'

@Injectable()
export class CommonNsDockerApiService
{

    constructor
    (
        public process: CommonNsProcessService,
        public json: CommonNsJsonService,
        public yaml: CommonNsYamlService
    )
    {

    }

    /* helpers */
    async api
    (
        path: string,
        body?: any
    )
    {
        let res = !body || Object.keys(body).length === 0 ? await this.process.exec('curl --silent --unix-socket /var/run/docker.sock http://localhost' + path) : await this.process.exec('curl -d ' + JSON.stringify(body) + ' -H "Content-Type: application/json" -X POST')
        return res.stdout
    }


}