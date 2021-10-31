import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonRouterElement } from './router.element'

import { CommonSelectElementModule } from '../select/select.element.module'

@NgModule
({
  declarations:
  [
    CommonRouterElement
  ],
  imports:
  [
    CommonModule,
    CommonSelectElementModule
  ],
  exports:
  [
    CommonRouterElement
  ]
})
export class CommonRouterElementModule
{

}
