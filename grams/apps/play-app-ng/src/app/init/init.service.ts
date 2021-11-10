import { Injectable, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

import { CommonNgCookieService } from '@grams/common/ng'


@Injectable
({
    providedIn: 'root'
})
export class AppInitService
{

    _xsrf: any

    constructor
    (
        public router: Router,
        public http: HttpClient,
        public cookie: CommonNgCookieService,
        @Inject('API') public api: string
    )
    {

    }

    async initialize
    (
    )
    {
        // this.xsrf()
        this.router.resetConfig((await import('../app.routes')).routes)
    }

    async xsrf
    (
    )
    {
        this._xsrf = await this.http.get(this.api + '/common/http/xsrf', {withCredentials: true, responseType: 'text'}).toPromise() as any
        this.cookie.set('XSRF-TOKEN', this._xsrf)
    }

}