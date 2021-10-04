import { Component } from '@angular/core'

import { NotesTxtService } from './txt.service'

@Component
({
  selector: 'notes-txt-component',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.scss']
})
export class NotesTxtComponent
{

    selected: string
    note: string

    constructor
    (
        public srv: NotesTxtService
    )
    {

    }

    async ngOnInit
    (
    )
    {
        await this.srv.init()
        this.selected = this.srv.index[0]
        this.srv.changeNote('assets/notes/' + this.selected)
    }

}
