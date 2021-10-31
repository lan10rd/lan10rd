import { Injectable, Inject } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { CommonHttpXsrfService } from '../../../../libs/common/http/xsrf/xsrf.service.ng'

@Injectable
({
    providedIn: 'root'
})
export class CommonHttpXsrfInterceptor implements HttpInterceptor
{

    constructor
    (
        public srv: CommonHttpXsrfService
    )
    {

    }

    intercept
    (
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>
    {
        return this.srv.interceptFunction(req, next)
    }

}