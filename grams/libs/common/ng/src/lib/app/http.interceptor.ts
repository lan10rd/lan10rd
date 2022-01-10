import { Inject, Injectable, Optional } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { CommonNgStreamsService } from '../streams/streams.service'

@Injectable
({
    providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor
{

    constructor
    (
        private tokenExtractor: HttpXsrfTokenExtractor,
        public streams: CommonNgStreamsService,
        @Inject('XSRF_HEADER') @Optional() public xsrf_header : string,
        @Inject('XSRF') @Optional() public xsrf : boolean,
        @Inject('WITH_CREDENTIALS') @Optional() public with_credentials : boolean,
        @Inject('ERROR') @Optional() public error : Function,
        @Inject('XSRF_DOMAIN') @Optional() public xsrf_domain: string,
        @Inject('HANDLE') @Optional() public handle : Function
    )
    {
        if (!xsrf_header)
            this.xsrf_header = 'X-XSRF-TOKEN'
        if (!this.with_credentials)
            this.with_credentials = true
        if (!this.error)
            this.error = (req: any, err: any) => {
                if(err.status === 401)
                    this.streams.dispatch('unauthorized', {req, err})
            }
        if (!this.xsrf_domain)
            this.xsrf_domain = this.streams.check('api')
        if (!this.handle)
            this.handle = (req: any) => {
                const xsrfHeader = this.xsrf_header;
                let xsrfToken = this.tokenExtractor.getToken() as string

                return req.url.includes
                (
                    this.xsrf_domain) &&
                    xsrfToken !== null &&
                    !req.headers.has(xsrfHeader
                ) ?
                    req.clone
                    (
                        {
                            withCredentials: true,
                            setHeaders: {[xsrfHeader]: xsrfToken}
                        }
                    ) : req.clone({})
            }
    }

    intercept
    (
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>
    {
        return next.handle(this.handle(req)).pipe(tap ( (type: any) => { /* ?? */ }, (err: any) => { this.error(req, err) }) )
    }

}