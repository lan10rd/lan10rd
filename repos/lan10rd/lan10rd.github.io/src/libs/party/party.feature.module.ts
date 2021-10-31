import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PartyFeature } from './party.feature'

@NgModule
({
  declarations:
  [
    PartyFeature
  ],
  imports:
  [
    CommonModule,
    RouterModule
  ]
})
export class PartyFeatureModule
{
    
}
