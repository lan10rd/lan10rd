import { Component } from '@angular/core'

import { CommonNgRouterService } from '../router.service'

@Component
({
    selector : 'common-ng-router-tree-element',
    templateUrl : './tree.element.html',
    styleUrls : ['./tree.element.scss']
})
export class CommonNgRouterTreeElement
{

    constructor
    (
        public router: CommonNgRouterService
    )
    {

    }

    async ngOnInit
    (
    )
    {
        console.log('router', this.router.router)
    }
    
}