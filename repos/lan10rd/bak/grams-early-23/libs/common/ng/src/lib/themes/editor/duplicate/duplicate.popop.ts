import { Component, ChangeDetectionStrategy } from '@angular/core'

import { CommonNgPopopService } from '../../../popop/popop.service'
import { CommonNgJsonService } from '../../../json/json.service'
import { CommonNgThemesService } from '../../../themes/themes.service'

@Component
({
    selector: 'common-ng-themes-editor-duplicate-popop', 
    templateUrl: './duplicate.popop.html',
    styleUrls: ['./duplicate.popop.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgThemesEditorDuplicatePopop
{

    unique: boolean = false
    key: string = ''
    display: string = ''
    theme: any

    constructor
    (
        public popop: CommonNgPopopService,
        public json: CommonNgJsonService,
        public themes: CommonNgThemesService
    )
    {

    }

    ngOnInit
    (
    )
    {
        this.key = this.theme[this.themes.theme_identifier]
        this.display = this.theme[this.themes.theme_display_name]
        this.isUnique()
    }

    isUnique
    (
    )
    {
        this.key = this.key.trim()
        this.unique = this.key.length > 0 && !(this.key in this.themes.themes)
    }

    duplicate
    (
    )
    {
        this.popop.close({ unique: this.unique, key: this.key, display: this.display })
    }

}