import { Component } from '@angular/core'

import { CommonNgUtilityService, CommonNgAppBarService } from '@grams/common/ng'

@Component
({
    selector : 'app-bar-element',
    templateUrl : './bar.element.html',
    styleUrls : ['./bar.element.scss']
})
export class AppBarElement
{

    constructor
    (
        public util : CommonNgUtilityService,
        public appBar: CommonNgAppBarService
    )
    {

    }

}