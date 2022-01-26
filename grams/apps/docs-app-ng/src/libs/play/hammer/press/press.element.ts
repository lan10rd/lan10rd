import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

import { Indicator, IndicatorAnimations } from '../indicator'

@Component
({
    selector: 'play-hammer-press-element', 
    templateUrl: './press.element.html',
    styleUrls: ['./press.element.scss'],
    animations: [IndicatorAnimations]
})
export class PlayHammerPressElement
{

    eventText = '';
    indicators;

    constructor(
        public util: CommonNgUtilityService
    ) {
        this.indicators = new Indicator();
    }

    onPress(evt: any) {
        const gestureIndicator: any = this.indicators.display(
        evt.center.x,
        evt.center.y,
        50
        );

        let time = 0;
        gestureIndicator.interval = setInterval(() => {
        gestureIndicator.size += 1;
        }, 10);
        this.eventText += `(${evt.center.x}, ${evt.center.y})<br/>`;
    }

    onPressUp(evt: any) {
        const indicator = this.indicators.gestureIndicators[0];
        if (indicator) {
        clearInterval(indicator.interval);
        this.indicators.hide(indicator);
        }
    }
   
}