import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector : 'app-bar-right-element',
    templateUrl : './right.element.html',
    styleUrls : ['./right.element.scss']
})
export class AppBarRightElement
{

    constructor
    (
        public util : CommonNgUtilityService
    )
    {

    }

}