import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

import { Indicator, IndicatorAnimations } from '../indicator'

@Component
({
    selector: 'play-hammer-rotate-element', 
    templateUrl: './rotate.element.html',
    styleUrls: ['./rotate.element.scss'],
    animations: [IndicatorAnimations]
})
export class PlayHammerRotateElement
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

    onRotate(evt: any)
    {
        this.eventText += `rotate ${evt.angle}&deg; about (${evt.center.x}, ${evt.center.y})<br/>`;
    }
   
}