import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-hammer-swipe-element', 
    templateUrl: './swipe.element.html',
    styleUrls: ['./swipe.element.scss']
})
export class PlayHammerSwipeElement
{

    eventText = '';

    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

    onSwipe(evt: any) {
        const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
        const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

        this.eventText += `${x} ${y}<br/>`;
    }
   
}