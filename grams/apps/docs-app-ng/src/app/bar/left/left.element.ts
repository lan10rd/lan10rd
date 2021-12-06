import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector : 'app-bar-left-element',
    templateUrl : './left.element.html',
    styleUrls : ['./left.element.scss']
})
export class AppBarLeftElement
{

    constructor
    (
        public util : CommonNgUtilityService
    )
    {

    }

}