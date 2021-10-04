import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AppInitService
{

    constructor
    (
        public router: Router
    )
    {

    }

    async initialize
    (
    )
    {
        this.router.resetConfig((await import('../app.routes')).routes)
        // xsrf http call here {withCredentials: true}
    }

}