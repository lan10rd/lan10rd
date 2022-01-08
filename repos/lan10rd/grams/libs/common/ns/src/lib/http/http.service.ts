import { Injectable, HttpService } from '@nestjs/common'
import { map } from 'rxjs/operators'

import { CommonNsRxjsService } from '../rxjs/rxjs.service'

@Injectable()
export class CommonNsHttpService
{

    constructor
    (
        public http: HttpService,
        public rxjs: CommonNsRxjsService
    )
    {

    }

    async get
    (
        url: string,
        config?
    ): Promise<any>
    {
        return this.rxjs.toPromise(this.http.get(url, config).pipe(map(res => res.data)))
    }

    async put
    (
        url: string,
        body: any,
        config?
    ): Promise<any>
    {
        return this.rxjs.toPromise(this.http.put(url, body, config).pipe(map(res => res.data)))
    }

    async post
    (
        url: string,
        body: any,
        config?
    ): Promise<any>
    {
        return this.rxjs.toPromise(this.http.post(url, body, config).pipe(map(res => res.data)))
    }

}