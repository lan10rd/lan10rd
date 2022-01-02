import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

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
        public util: CommonNgUtilityService
    )
    {

    }

}