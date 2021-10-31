import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PlayFeature } from './play.feature'

const routes: Routes = [
    {
        path: '',
        component: PlayFeature,
        pathMatch: 'full'
    }
]

@NgModule
({
  imports:
  [
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class PlayFeatureRoutingModule
{

}
