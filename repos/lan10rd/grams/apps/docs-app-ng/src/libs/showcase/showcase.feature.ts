import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'showcase-feature',
    templateUrl: './showcase.feature.html',
    styleUrls: ['./showcase.feature.scss']
})
export class ShowcaseFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}