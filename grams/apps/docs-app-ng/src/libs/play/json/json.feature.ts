import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-json-feature',
    templateUrl: './json.feature.html',
    styleUrls: ['./json.feature.scss']
})
export class PlayJsonFeature
{

    takes: any = {
        sight: 's',
        can: {
            you: {
                see: {
                    me: ['hi']
                }
            }
        }
    }
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}