import { Injectable, ComponentFactoryResolver } from '@angular/core'
import { Router, RouterEvent, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, RoutesRecognized, ActivationStart, ActivationEnd } from '@angular/router'

import { CommonNgJsonService } from '../json/json.service'
import { CommonNgSeoService } from '../seo/seo.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgRouterService
{

    _routes: any
    _renderedRoutes: string[] = []
    activations: any = []

    constructor
    (
        public router: Router,
        public json: CommonNgJsonService,
        public resolver: ComponentFactoryResolver,
        public seo: CommonNgSeoService
    )
    {
        router.events.subscribe(($event:any) => {
            if ($event instanceof ActivationEnd)
            {
                let dynamicRoutes = this.json.pathToValue($event, 'snapshot.routeConfig.data.data.CommonRouterService.routes')
                let routes: any = this.json.pathToValue($event, 'snapshot.data.CommonRouterService.routes')
                if (dynamicRoutes)
                    routes = dynamicRoutes
                this.activations.push(routes ? routes : [])
                let seo = this.json.pathToValue($event, 'snapshot.data.CommonRouterService.seo')
                if (seo)
                {
                    this.seo.bind(this.router.url, seo.title, seo.description, seo.keywords, seo.tags)
                }
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
        routes: any = []
    )
    {
        let newRenderedRoutes = []
        for (let r of routes)
            newRenderedRoutes.push(typeof r === 'string' ? r : r.name)
        this._routes = routes
        this._renderedRoutes = newRenderedRoutes
    }

    addRoutes
    (
        routes: any[],
        ignoreDuplicates = true
    )
    {
        Promise.resolve(null).then(() => {
            if (ignoreDuplicates)
                routes = routes.filter(route => {
                    let sameRoute = this._routes.find((rout: any) => {
                        return typeof rout === 'string' ? (typeof route === 'string' ? route === rout : route.name === rout) : (typeof route === 'string' ? rout.name === route : route.name === route.name)
                    })
                    return !sameRoute
                })
            this.routes([...this._routes, ...routes, ])
        })
    }

    route
    (
        a: any
    )
    {
        if (a)
        {
            let route = ''
            let options: any = {queryParamsHandling: 'preserve'}
            if (typeof a === 'string')
                route = a
            else
            {
                if (this.json.typeOf(this._routes) === 'arr')
                    for (let r of this._routes)
                        if (r.name === a)
                        {
                            route = r.path
                            if (r.options)
                                options = r.options
                        }
            }
            if (route.startsWith('/'))
                this.router.navigate([route], options)
            let url = this.router.url.split('?')[0] + '/' + route
            let url_stack: any = []
            for (let u of url.split('/'))
            {
                if (u === '.'){ }
                else if (u === '..')
                {
                    if (url_stack.length > 0)
                        url_stack.pop()
                }
                else
                {
                    url_stack.push(u)
                }
            }
            this.router.navigate([url_stack.join('/')], options)
        }
    }
    
    navigate
    (
        a: any
    )
    {
        return this.router.navigate([a], {queryParamsHandling: 'preserve'})
    }

}