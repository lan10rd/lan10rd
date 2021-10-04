import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NotesTxtComponent } from './txt.component'

import { CommonSelectElementModule } from '../../common/select/select.element.module'

@NgModule
({
  declarations:
  [
    NotesTxtComponent
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    CommonSelectElementModule
  ],
  exports:
  [
    NotesTxtComponent
  ]
})
export class NotesTxtComponentModule
{

}
