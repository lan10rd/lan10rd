import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-feature',
    templateUrl: './play.feature.html',
    styleUrls: ['./play.feature.scss']
})
export class PlayFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}