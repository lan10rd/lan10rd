import { Component } from '@angular/core'

import { CommonNgHttpService } from './http.service'
import { CommonNgJsonService } from '../json/json.service'

@Component
({
    selector: 'common-ng-http-artifact',
    templateUrl: './http.artifact.html',
    styleUrls: ['./http.artifact.scss']
})
export class CommonNgHttpArtifact
{

    url: string = ''
    payload: string = '{}'
    options: string = '{}'
    res: any
    resText: any
    resE: any

    mode: any = 'get'

    constructor
    (
        public http: CommonNgHttpService,
        public json: CommonNgJsonService
    )
    {

    }

    async fire
    (
    )
    {
        try
        {
            this.resText = ''
            switch(this.mode)
            {
                case 'get': {
                    this.res = await this.http.get(this.url, this.json.parse(this.options, false))
                    break
                }
                case 'post': {
                    this.res = await this.http.post(this.url, this.json.parse(this.payload, false), this.json.parse(this.options, false))
                    break
                }
                case 'put': {
                    this.res = await this.http.put(this.url, this.json.parse(this.payload, false), this.json.parse(this.options, false))
                    break
                }
                case 'delete': {
                    this.res = await this.http.delete(this.url, this.json.parse(this.options, false))
                    break
                }
            }
            this.resText = this.json.stringify(this.res, 4)
            this.resE = ''
        }
        catch(e)
        {
            this.resE = e
        }
    }    

}