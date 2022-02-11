import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

import { Indicator, IndicatorAnimations } from '../indicator'

@Component
({
    selector: 'play-hammer-pan-element', 
    templateUrl: './pan.element.html',
    styleUrls: ['./pan.element.scss'],
    animations: [IndicatorAnimations]
})
export class PlayHammerPanElement
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
        this.indicators = new Indicator();
    }

    onPan(evt: any)
    {
        this.eventText += `(${evt.center.x}, ${evt.center.y})<br/>`;
        const indicator = this.indicators.display(
        evt.center.x,
        evt.center.y,
        50
        );
        this.indicators.hide(indicator);
    }
   
}