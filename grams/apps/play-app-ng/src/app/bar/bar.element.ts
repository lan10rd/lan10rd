import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

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
        public util : CommonNgUtilityService
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