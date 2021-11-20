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

    show: string = ''

    constructor
    (
        public util : CommonNgUtilityService,
        public appBarService : CommonNgAppBarService
    )
    {

    }

    async open
    (
        incoming: string
    )
    { 
        if (this.show === incoming)
            this.show = ''
        else
            this.show = incoming
    }

}