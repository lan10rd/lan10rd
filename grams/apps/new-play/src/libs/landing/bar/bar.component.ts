import { Component, ViewChild } from '@angular/core';

import { CommonNgAppBarTemplateService } from '@grams/common/ng'

@Component
({
    selector: 'landing-feature-bar',
    templateUrl: './bar.component.html'
})
export class LandingBarComponent
{

    @ViewChild('middleBar') middleBar: any
    
    constructor
    (
        public barService: CommonNgAppBarTemplateService
    )
    {

    }

    ngAfterViewInit(){
        this.barService.updateBar({
            middleBar: this.middleBar
        })
    }

}