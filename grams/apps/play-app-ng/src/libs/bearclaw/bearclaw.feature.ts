import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'testing-feature',
    templateUrl: './testing.feature.html',
    styleUrls: ['./testing.feature.scss']
})
export class TestingFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}