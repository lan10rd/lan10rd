import { Component, Input } from '@angular/core'

import { CommonNgRouterService, CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector : 'app-bar-left-element',
    templateUrl : './left.element.html',
    styleUrls : ['./left.element.scss']
})
export class AppBarLeftElement
{

    @Input() menu: any

    constructor
    (
        public util : CommonNgUtilityService,
        public router : CommonNgRouterService
    )
    {

    }

}