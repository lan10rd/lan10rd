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
    locations: any = {
        ASSETS_SRC: 'https://github.com/lan10rd/lan10rd/tree/main/repos/lan10rd/assets',
        ASSETS: 'https://raw.githubusercontent.com/lan10rd/lan10rd/main/repos/lan10rd/assets/'
    }
    paths: any = []
    
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
        let indexJson = this.assets('index.json')
        let paths = await this.util.http.get(this.assets('index.json'))
        this.paths = paths.filter((path: string) => path.includes('/notes/')).map((path: string) => path.split('assets/notes/').join(''))
    }

    assets
    (
        suffix: any
    )
    {
        return this.locations.ASSETS + suffix
    }

    async fetchNote
    (
        $event: string
    )
    {
        if ($event)
        {
            this.note = await this.util.http.get(this.assets('notes/' + $event), {responseType: 'text'})
        }
        else
        {
            this.note = undefined
        }
    }

}