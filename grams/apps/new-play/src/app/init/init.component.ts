import { Component, ViewChild } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'
import { BarService } from '../../libs/bar/bar.service'

@Component
({
    selector: 'app-init-component',
    templateUrl: './init.component.html'
})
export class AppInitComponent
{
    
    constructor
    (
        public util: CommonNgUtilityService,
        public barService: BarService
    )
    {

    }

}