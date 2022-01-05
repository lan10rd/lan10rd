import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'app-landing-feature',
    templateUrl: './landing.feature.html',
    styleUrls: ['./landing.feature.scss']
})
export class AppLandingFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}