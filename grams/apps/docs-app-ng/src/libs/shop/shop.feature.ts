import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'shop-feature',
    templateUrl: './shop.feature.html',
    styleUrls: ['./shop.feature.scss']
})
export class ShopFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}