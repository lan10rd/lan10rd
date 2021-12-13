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

    copy
    (
        theme: any
    )
    {
        let copy: any = this.json.copy(theme)
        copy[this.themes.theme_identifier] += 'copy'
        let copy_id = copy[this.themes.theme_identifier]
        if (!(copy_id in this.themes))
        {
            this.themes.themes[copy_id] = copy
            this.themes.setThemes(this.themes.themes)
        }
    }

    store
    (
        theme: any,
        default_theme: boolean = false
    )
    {
        let stored = this.themes.getStored()
        let theme_key = theme[this.themes.theme_identifier]
        stored.themes[theme_key] = theme
        if (default_theme)
            stored.theme = theme_key
        this.themes.setStored(stored)
    }

    unstore
    (
        theme: any
    )
    {
        let stored = this.themes.getStored()
        let theme_key: string = theme[this.themes.theme_identifier]
        if (theme_key in stored.themes)
            delete stored.themes[theme_key]
        this.themes.setStored(stored)
    }

    remove
    (
        theme: any
    )
    {
        let theme_key = theme[this.themes.theme_identifier]
        let themes = this.themes.themes
        if (theme_key in themes)
            delete themes[theme_key]
        this.themes.setThemes(themes)
    }

    update
    (
        theme: any
    )
    {
        let new_themes = this.json.copy(this.themes.themes)
        new_themes[theme[this.themes.theme_identifier]] = theme
        this.themes.themes = new_themes
    }

    handleThemesChange
    (
        option: any
    )
    {
        this.themes_theme_copy = this.json.copy(option)
    }

}