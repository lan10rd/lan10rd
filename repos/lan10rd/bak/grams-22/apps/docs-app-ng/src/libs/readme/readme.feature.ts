import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'readme-feature',
    templateUrl: './readme.feature.html',
    styleUrls: ['./readme.feature.scss']
})
export class ReadmeFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}