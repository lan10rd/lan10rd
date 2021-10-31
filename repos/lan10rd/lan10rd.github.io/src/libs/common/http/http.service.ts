import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { forkJoin } from 'rxjs'

import { CommonJsonService } from '../json/json.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonHttpService
{

    constructor
    (
        public http: HttpClient,
        public json: CommonJsonService
    )
    {

    }

    // {responseType: 'text'}
    // withCredentials: true

    async all
    (
        calls: any[]
    )
    {
        let httpCalls: any = []
        for (let call of calls)
        {
            switch (call.method)
            {
                case 'get':
                {
                    httpCalls.push(this.http.get(call.url, call.options))
                    break
                }
                case 'put':
                {
                    httpCalls.push(this.http.put(call.url, call.body, call.options))
                    break
                }
                case 'post':
                {
                    httpCalls.push(this.http.post(call.url, call.body, call.options))
                    break
                }
                case 'delete':
                {
                    httpCalls.push(this.http.delete(call.url, call.options))
                    break
                }
                default:
                    break
            }
        }
        return forkJoin(httpCalls).toPromise()
    }

    async get
    (
        url: string,
        options?: any
    )
    {
        return await this.http.get(url, options).toPromise() as any
    }

    async put
    (
        url: string,
        body: any,
        options?: any
    )
    {
        body = this.json.parse(body)
        return await this.http.put(url, body, options).toPromise() as any
    }

    async post
    (
        url: string,
        body: any,
        options?: any
    )
    {
        body = this.json.parse(body)
        return await this.http.post(url, body, options).toPromise() as any
    }

    async delete
    (
        url: string,
        options?: any
    )
    {
        return await this.http.delete(url, options).toPromise() as any 
    }

    async open
    (
        url: string
    )
    {
        window.open(url)
    }

}