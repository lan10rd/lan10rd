import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

import { Indicator, IndicatorAnimations } from '../indicator'

@Component
({
    selector: 'play-hammer-tap-element', 
    templateUrl: './tap.element.html',
    styleUrls: ['./tap.element.scss'],
    animations: [IndicatorAnimations]
})
export class PlayHammerTapElement
{

    eventText = ''
    indicators: any

    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

    ngOnInit(){
        this.indicators = new Indicator()
    }

    onTap(evt: any) {
        this.eventText += `(${evt.center.x}, ${evt.center.y})<br/>`;
        const indicator = this.indicators.display(
            evt.center.x,
            evt.center.y,
            50
        );
        this.indicators.hide(indicator);
    }
   
}