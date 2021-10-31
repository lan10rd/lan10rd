import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutFeature } from './about.feature'

const routes: Routes = [
    {
        path: '',
        component: AboutFeature,
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
export class AboutFeatureRoutingModule
{

}
