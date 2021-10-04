import { Component } from '@angular/core'
import { ActivatedRoute} from '@angular/router'

/* seems necessary to get router element to show on app load! */
import { CommonNgRouterService } from '../router/router.service' 

@Component
({
    selector: 'common-dynamic-feature',
    template:
    `
        <common-ng-dynamic-element
        *ngIf="route && route.loaded"
        [component]="route.component"
        [module]="route.module"
        [data]="route.data"
        ></common-ng-dynamic-element>
    `
})
export class CommonNgDynamicFeature
{

    selected = -1
    route: any

    navigation$: any

    constructor
    (
        public activated: ActivatedRoute,
        public router: CommonNgRouterService
    )
    {

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
            if ('canActivate' in this.route)
            {
                let canActivates = []
                for (let can of this.route.canActivate)
                    canActivates.push(await can())
                this.route.canActivates = canActivates
                let canActivate = true
                for (let can of this.route.canActivates)
                {
                    console.log('can', can)
                }
                if (!canActivate)
                {
                    console.log('cant activate!!')
                    return
                }
            }
            this.route.loaded = true
        }
    }

}