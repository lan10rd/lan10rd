import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'notes-feature',
    templateUrl: './notes.feature.html',
    styleUrls: ['./notes.feature.scss']
})
export class NotesFeature
{

    note: any
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

    async ngOnInit
    (
    )
    {
        console.log('notes feature')
        let paths = await this.util.http.get(this.util.functions.assets('index.json'))
        this.util.data.notes = {
            paths: paths.filter((path: string) => path.includes('/notes/')).map((path: string) => path.split('assets/notes/').join(''))
        }
    }

    async fetchNote
    (
        $event: string
    )
    {
        if ($event)
        {
            this.note = await this.util.http.get(this.util.functions.assets('notes/' + $event), {responseType: 'text'})
        }
        else
        {
            this.note = undefined
        }
    }

}