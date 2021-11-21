import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector : 'list-feature',
    templateUrl : './list.feature.html',
    styleUrls : ['./list.feature.scss']
})
export class ListFeature
{

    items: any = Array.from({length: 100001}).map((_, i) => `Item #${i}`);
    obj: any = {
        jo: {
            name_uno: 'joseph',
            jojo: {
                name_dos: 'joey'
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