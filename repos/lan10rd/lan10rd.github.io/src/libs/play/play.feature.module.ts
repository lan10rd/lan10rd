import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PlayFeature } from './play.feature'

// import { CommonNgSelectElementModule, CommonNgScrollElementModule, CommonNgButtonElementModule } from '@lanl0rdjs/common-ng'


@NgModule
({
  declarations:
  [
    PlayFeature,
    // CommonNgSelectElementModule
  ],
  imports:
  [
    CommonModule,
    FormsModule
  ]
})
export class PlayFeatureModule
{
    
}
