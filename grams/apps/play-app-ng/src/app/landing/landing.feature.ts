import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
  selector: 'app-landing-feature',
  templateUrl: './landing.feature.html',
  styleUrls: ['./landing.feature.scss'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLandingFeature
{

    // items = Array.from({length: 100001}).map((_, i) => `Item #${i}`);
    items = []
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

    datasource: any = {
      get: (index: any, count: any, success: any) => {
        const data = [];
        for (let i = index; i <= index + count - 1; i++) {
          data.push({ id: i, text: 'item #' + i });
        }
        success(data);
      },
      settings: {
        horizontal: true
      }
    }

}