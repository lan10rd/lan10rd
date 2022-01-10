import { Component } from '@angular/core';

import { CommonNgUtilityService, CommonNgAppBarService } from '@grams/common/ng'

@Component
({
    selector: 'play-apple-feature',
    templateUrl: './apple.feature.html',
    styleUrls: ['./apple.feature.scss']
})
export class PlayAppleFeature
{
    
    constructor
    (
        public util : CommonNgUtilityService,
        public appBar : CommonNgAppBarService
    )
    {

    }

    async ngOnInit
    (
    )
    {
        let middleBar = {
            component: (await import('./bar/bar.element')).PlayAppleBarElement,
            module: (await import('./bar/bar.element.module')).PlayAppleBarElementModule,
        }
        this.appBar.middleBar = middleBar
    }

    ngOnDestroy
    (
    )
    {
        this.appBar.middleBar = undefined
    }

}