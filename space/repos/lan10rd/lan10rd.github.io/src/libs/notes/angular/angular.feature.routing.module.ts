import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotesAngularFeature } from './angular.feature'

const routes: Routes = [
    {
        path: '',
        component: NotesAngularFeature
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
export class NotesAngularFeatureRoutingModule
{

}
