import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'app-init-component',
    templateUrl: './init.component.html',
    styleUrls: ['init.component.scss']
})
export class AppInitComponent
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}