import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-apple-bar-element',
    templateUrl: './bar.element.html',
    styleUrls: ['./bar.element.scss']
})
export class PlayAppleBarElement
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}