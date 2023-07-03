import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-nest-feature',
    templateUrl: './nest.feature.html',
    styleUrls: ['./nest.feature.scss']
})
export class PlayNestFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}