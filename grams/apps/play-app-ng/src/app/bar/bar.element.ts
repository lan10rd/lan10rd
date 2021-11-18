import { Component, ViewChild } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector : 'app-bar-element',
    templateUrl : './bar.element.html',
    styleUrls : ['./bar.element.scss']
})
export class AppBarElement
{

    @ViewChild('header') header : any
    show: string = ''

    constructor
    (
        public util : CommonNgUtilityService
    )
    {

    }

    async open
    (
        leftOrRight: string
    )
    { 
        if (this.show === '')
            this.show = leftOrRight
        else
            this.show = ''
    }

    height(){
        return 'calc(100vh - ' + this.header.nativeElement.offsetHeight + 'px)'
    }

}