import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonDynamicArtifactModule } from '../libs/common/dynamic/dynamic.artifact.module'

@NgModule
({
  imports:
  [
    RouterModule.forRoot
    (
        [],
        {
            useHash: true
        }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule
{

}
