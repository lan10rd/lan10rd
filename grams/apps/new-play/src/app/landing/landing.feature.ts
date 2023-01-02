import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'app-landing-feature',
    template: 'diamonds'
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