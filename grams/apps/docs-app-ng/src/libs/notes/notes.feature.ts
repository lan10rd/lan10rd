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
        let page = await this.util.http.get('https://raw.githubusercontent.com/lan10rd/lan10rd/main/repos/lan10rd/lan10rd.github.io/src/assets/notes/os/docker/save-load.txt', {responseType: 'text'})
        console.log('page', page)
    }

}