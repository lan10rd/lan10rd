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

}