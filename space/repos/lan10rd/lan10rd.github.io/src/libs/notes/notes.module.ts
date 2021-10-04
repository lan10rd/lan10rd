import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotesComponent } from './notes.component'

import { NotesTxtComponentModule } from './txt/txt.component.module'

@NgModule
({
  declarations:
  [
    NotesComponent
  ],
  imports:
  [
    CommonModule,
    NotesTxtComponentModule
  ]
})
export class NotesModule
{
    
}
