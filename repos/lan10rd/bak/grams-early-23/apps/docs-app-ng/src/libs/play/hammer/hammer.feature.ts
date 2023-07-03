import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-hammer-feature',
    templateUrl: './hammer.feature.html',
    styleUrls: ['./hammer.feature.scss']
})
export class PlayHammerFeature
{

    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}