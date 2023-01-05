import { Component, ViewChild } from '@angular/core';

import { BarService } from '../../../libs/bar/bar.service'

@Component
({
    selector: 'landing-feature-bar',
    templateUrl: './bar.component.html'
})
export class LandingBarComponent
{

    @ViewChild('leftButton') leftButton: any
    @ViewChild('leftBar') leftBar: any
    @ViewChild('leftView') leftView: any
    @ViewChild('middleBar') middleBar: any
    
    constructor
    (
        public barService: BarService
    )
    {

    }

    ngAfterViewInit(){
        this.barService.updateBar({
            leftButton: this.leftButton,
            leftBar: this.leftBar,
            leftView: this.leftView,
            middleBar: this.middleBar
        })
    }

}