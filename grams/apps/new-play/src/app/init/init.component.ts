import { Component, OnInit } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'app-init-component',
    templateUrl: './init.component.html'
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