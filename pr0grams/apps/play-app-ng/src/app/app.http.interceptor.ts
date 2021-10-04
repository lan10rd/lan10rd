import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { CommonNgStreamsService } from '@lanl0rd/common/ng'

@Injectable
({
    providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor
{

    constructor
    (
        private tokenExtractor: HttpXsrfTokenExtractor,
        public streams: CommonNgStreamsService
    )
    {

    }

    intercept
    (
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>
    {
        const xsrfHeader = 'X-XSRF-TOKEN';
        let xsrfToken = this.tokenExtractor.getToken() as string
        return next.handle
            (
                req.url.includes(this.streams.check('api')) && xsrfToken !== null && !req.headers.has(xsrfHeader) ?
                    req.clone
                    (
                        {
                            withCredentials: true,
                            setHeaders: {[xsrfHeader]: xsrfToken}
                        }
                    ) : req.clone({})
            ).pipe
            (
                tap
                (
                    (type: any) => {
                        // ??
                    }, 
                    (err: any) =>
                    {
                        if(err.status === 401)
                            this.streams.dispatch('unauthorized', {req, err})
                    }
                )
            )
    }

}