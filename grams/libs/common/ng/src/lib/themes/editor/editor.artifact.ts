import { Component } from '@angular/core'

import { CommonNgThemesService } from '../themes.service'
import { CommonNgPopopService } from '../../popop/popop.service'
import { CommonNgJsonService } from '../../json/json.service'

@Component
({
    selector: 'common-ng-themes-editor-artifact', 
    templateUrl: './editor.artifact.html',
    styleUrls: ['./editor.artifact.scss']
})
export class CommonNgThemesEditorArtifact
{

    theme_copy: any
    themes_theme_copy: any

    constructor
    (
        public themes: CommonNgThemesService,
        public popop: CommonNgPopopService,
        public json: CommonNgJsonService
    )
    {

    }

    ngOnInit
    (
    )
    {
        /* get styles */
    }

    adjust
    (
        theme: any
    )
    {
        console.log('theme', theme)
        this.themes.setTheme(theme)
    }

    handleMenuChange
    (
        option: any
    )
    {
        this.theme_copy = this.json.copy(this.themes.theme)
    }

    handleThemesChange
    (
        option: any
    )
    {
        this.themes_theme_copy = this.json.copy(option)
    }

}