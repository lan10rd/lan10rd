import { Component } from '@angular/core'

import { CommonNgThemesService } from '../themes.service'

@Component
({
    selector: 'common-ng-themes-editor-artifact', 
    templateUrl: './editor.artifact.html',
    styleUrls: ['./editor.artifact.scss']
})
export class CommonNgThemesEditorArtifact
{



    constructor
    (
        public themes: CommonNgThemesService
    )
    {

    }

    ngOnInit
    (
    )
    {
        /* get styles */
    }

}