import { Component } from '@angular/core'

import { CommonNgThemesService } from '../themes.service'
import { CommonNgPopopService } from '../../popop/popop.service'
import { CommonNgJsonService } from '../../json/json.service'
import { CommonNgDocumentService } from '../../document/document.service'

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
        public json: CommonNgJsonService,
        public document: CommonNgDocumentService
    )
    {

    }

    ngOnInit
    (
    )
    {
        /* get styles */
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
        console.log('making a copy')
        this.themes_theme_copy = this.json.copy(option)
    }

    async paste
    (
    )
    {
        this.popop.open
        (
            (await import('./paste/paste.popop')).CommonNgThemesEditorPastePopop,
            (await (await import('./paste/paste.popop.module')).CommonNgThemesEditorPastePopopModule)
        ).subscribe((data: any) => {
            if (data?.status?.paste)
            {
                let theme = data.status.paste
                let theme_id = theme[this.themes.theme_identifier]
                while (theme_id in this.themes.themes)
                    theme_id += 'copy'
                theme[this.themes.theme_identifier] = theme_id
                this.themes.themes[theme_id] = theme
                this.themes.setThemes(this.themes.themes)
            }
        })
    }

    async remove
    (
        theme: any
    )
    {
        this.popop.open
        (
            (await import('./paste/paste.popop')).CommonNgThemesEditorPastePopop,
            (await (await import('./paste/paste.popop.module')).CommonNgThemesEditorPastePopopModule),
            {
                theme
            }
        ).subscribe((data: any) => {
            if (data?.status?.remove)
            {
                let theme_key = theme[this.themes.theme_identifier]
                let themes = this.themes.themes
                if (theme_key in themes)
                    delete themes[theme_key]
                this.themes.setThemes(themes)
            }
        })
    }

    async duplicate
    (
        theme: any
    )
    {
        let copy: any = this.json.copy(theme)
        this.popop.open
        (
            (await import('./duplicate/duplicate.popop')).CommonNgThemesEditorDuplicatePopop,
            (await (await import('./duplicate/duplicate.popop.module')).CommonNgThemesEditorDuplicatePopopModule),
            {
                theme: copy
            }
        ).subscribe((data: any) => {
            if (data?.status?.key && (!(data.status.key in this.themes.themes)))
            {
                copy[this.themes.theme_identifier] = data.status.key
                this.themes.themes[data.status.key] = copy
                this.themes.setThemes(this.themes.themes)
            }
        })
    }

}