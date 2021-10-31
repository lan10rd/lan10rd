import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { CommonStreamsService } from '../../../../libs/common/streams/streams.service.ng'
import { Observable, of, throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

@Injectable
({
    providedIn: 'root'
})
export class CommonHttpXsrfService
{

    xsrf = 'love me sidewayyyys'
    interceptFunction: Function

    constructor
    (
        private http: HttpClient,
        @Inject('XSRF_OPTIONS') private xsrfOptions: any,
        public streams: CommonStreamsService
    )
    { 
        if (!('endpoint' in xsrfOptions))
            xsrfOptions['endpoint'] = '/xsrf'
        if (!('returnKey' in xsrfOptions))
            xsrfOptions['returnKey'] = 'xsrf'
        if (!('key' in xsrfOptions))
            xsrfOptions['key'] = 'x-xsrf-token'
        if (!('api' in xsrfOptions))
            xsrfOptions['api'] = 'https://api.glass.earth'
        this.interceptFunction = this.defaultIntercept
    }

    loadAppConfig
    (
    )
    {
        return this.http.get(this.xsrfOptions.api + this.xsrfOptions.endpoint, {withCredentials: true}).toPromise().then(data => { this.xsrf = data[this.xsrfOptions.returnKey] })
    }

    defaultIntercept
    (
        req: HttpRequest<any>,
        next: HttpHandler
    )
    {
        return req.url.startsWith(this.xsrfOptions.api) ?
            next.handle
            (
                req.clone
                (
                    {
                        withCredentials: true,
                        setHeaders: {
                            [this.xsrfOptions.key]: this.xsrf
                        }
                    }
                )
            ).pipe
            (
                tap
                (
                    () => {},
                    (err: any) =>
                    {
                        if
                        (
                            err.status === 401
                        )
                            this.streams.dispatch('passport', 'unauthorized', err, {keepAlive: true})
                    }
                )
            ) : next.handle(req)
    }

}