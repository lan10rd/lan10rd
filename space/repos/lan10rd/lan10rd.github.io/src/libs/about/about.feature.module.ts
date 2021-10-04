import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import { AboutFeatureRoutingModule } from './about.feature.routing.module'
import { AboutFeature } from './about.feature'

// import { CommonRouterElementModule } from '../common/router/router.element.module'

@NgModule
({
  declarations:
  [
    AboutFeature
  ],
  imports:
  [
    CommonModule,
    // AboutFeatureRoutingModule,
    // CommonRouterElementModule
  ]
})
export class AboutFeatureModule
{
    
}
