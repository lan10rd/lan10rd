import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'play-notifications-feature',
    templateUrl: './notifications.feature.html',
    styleUrls: ['./notifications.feature.scss']
})
export class PlayNotificationsFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

    notify(title: any, body:any, img:any, delay: any){
        this.util.json.timeout(() => {this.util.notifications.create(title.value, {body: body.value, icon: img.value})}, +delay.value)
    }

}