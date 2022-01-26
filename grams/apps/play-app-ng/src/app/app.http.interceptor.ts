import { Injectable, Inject } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'


@Injectable
({
    providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor
{

    constructor
    (
        public tokenExtractor: HttpXsrfTokenExtractor,
        @Inject('API') public api: string
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
                req.url.includes(this.api) && xsrfToken !== null && !req.headers.has(xsrfHeader) ?
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
                        console.log('err', err)
                        if(err.status === 401)
                        {
                            // this.streams.dispatch('unauthorized', {req, err})
                        }
                    }
                )
            )
    }

}