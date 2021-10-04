import { Injectable, ComponentFactoryResolver } from '@angular/core'
import { Router, RouterEvent, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, RoutesRecognized, ActivationStart, ActivationEnd } from '@angular/router'

import { CommonJsonService } from '../json/json.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonRouterService
{

    _routes
    _renderedRoutes: string[] = []
    activations = []

    constructor
    (
        public router: Router,
        public json: CommonJsonService,
        public resolver: ComponentFactoryResolver
    )
    {
        router.events.subscribe($event => {
            if ($event instanceof ActivationEnd)
            {
                let routes = this.json.pathToValue($event, 'snapshot.routeConfig.data.data.CommonRouterService.routes')
                this.activations.push(routes ? routes : [])
            }
            else if ($event instanceof NavigationEnd)
            {
                this.routes(this.activations[0])
                this.activations = []
            }
        })
    }

    routes
    (
        routes
    )
    {
        let newRenderedRoutes = []
        for (let r of routes)
        {
            if (typeof r === 'string')
                newRenderedRoutes.push(r)
            else
                newRenderedRoutes.push(r.name)
        }
        this._routes = routes
        this._renderedRoutes = newRenderedRoutes
    }

    route
    (
        a
    )
    {
        if (typeof a === 'string')
            this.router.navigate([this.router.url + '/' + a], {
                // relativeTo: this.activated
            })
        for (let r of this._routes)
            if (r.name === a)
                this.router.navigate([r.path])
    }

}