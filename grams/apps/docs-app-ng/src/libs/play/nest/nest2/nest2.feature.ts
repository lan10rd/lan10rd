import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-nest-nest2-feature',
    templateUrl: './nest2.feature.html',
    styleUrls: ['./nest2.feature.scss']
})
export class PlayNestNest2Feature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}