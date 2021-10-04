import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotesAngularFeatureRoutingModule } from './angular.feature.routing.module'
import { NotesAngularFeature } from './angular.feature'

// import { CommonRouterElementModule } from '../../common/router/router.element.module'

@NgModule
({
  declarations:
  [
    NotesAngularFeature
  ],
  imports:
  [
    CommonModule,
    NotesAngularFeatureRoutingModule,
    // CommonRouterElementModule
  ]
})
export class NotesAngularFeatureModule
{

}
