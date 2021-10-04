import { Component } from '@angular/core'
import { ActivatedRoute} from '@angular/router'

import { CommonRouterService } from '../router/router.service'

@Component
({
    selector: 'common-dynamic-artifact',
    template:
    `
        <common-dynamic-element
        *ngIf="route && route.loaded"
        [component]="route.component"
        [module]="route.module"
        [data]="route.data"
        ></common-dynamic-element>
    `
})
export class CommonDynamicArtifact
{

    selected = -1
    route

    navigation$

    constructor
    (
        public activated: ActivatedRoute,
        public router: CommonRouterService
    )
    {
        // this.router.activated = activated
    }

    ngOnInit
    (
    )
    {
        this.selectRoute()
    }

    ngOnDestroy
    (
    )
    {

    }

    async selectRoute
    (
    )
    {
        this.route = this.activated.snapshot.data
        if (this.route.module && this.route.component)
        {
            this.route.module = await this.route.module()
            this.route.component = await this.route.component()
            this.route.loaded = true
        }
    }

}