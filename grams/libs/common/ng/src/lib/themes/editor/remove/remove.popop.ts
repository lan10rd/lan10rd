import { Component } from '@angular/core'

import { CommonNgPopopService } from '../../../popop/popop.service'
import { CommonNgJsonService } from '../../../json/json.service'
import { CommonNgThemesService } from '../../../themes/themes.service'

@Component
({
    selector: 'common-ng-themes-editor-remove-popop', 
    templateUrl: './remove.popop.html',
    styleUrls: ['./remove.popop.scss']
})
export class CommonNgThemesEditorRemovePopop
{

    theme: any

    constructor
    (
        public popop: CommonNgPopopService,
        public json: CommonNgJsonService,
        public themes: CommonNgThemesService
    )
    {

    }

}