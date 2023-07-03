import { Injectable, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Injectable
({
    providedIn: 'root'
})
export class AppInitService
{

    constructor
    (
        public http: HttpClient,
        public router: Router
    )
    {

    }

    async initialize
    (
    )
    {
        this.router.resetConfig((await import('../app.routes')).routes)
    }

}