import { Component, ViewChild } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
  selector: 'landing-feature',
  templateUrl: './landing.feature.html',
  styleUrls: [
    './landing.feature.scss'
  ]
})
export class AppLandingFeature
{

  @ViewChild('barTemplate') barTemplate: any
  @ViewChild('leftButton') leftButton: any
  
  constructor
  (
      public util: CommonNgUtilityService
  )
  {

  }

}