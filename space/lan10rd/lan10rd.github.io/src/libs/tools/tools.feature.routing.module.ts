import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ToolsFeature } from './tools.feature'

const routes: Routes = [
    {
        path: '',
        component: ToolsFeature,
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
export class ToolsFeatureRoutingModule
{

}
