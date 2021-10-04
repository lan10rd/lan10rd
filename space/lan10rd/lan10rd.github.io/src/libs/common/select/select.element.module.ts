import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonSelectElement } from './select.element'

import { CommonButtonElementModule } from '../button/button.element.module'

@NgModule
({
  declarations:
  [
    CommonSelectElement
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    CommonButtonElementModule
  ],
  exports:
  [
    CommonSelectElement
  ]
})
export class CommonSelectElementModule
{

}
