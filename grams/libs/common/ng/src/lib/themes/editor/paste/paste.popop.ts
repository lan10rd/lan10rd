import { Component } from '@angular/core'

import { CommonNgPopopService } from '../../../popop/popop.service'
import { CommonNgJsonService } from '../../../json/json.service'

@Component
({
    selector: 'common-ng-themes-editor-paste-popop', 
    templateUrl: './paste.popop.html',
    styleUrls: ['./paste.popop.scss']
})
export class CommonNgThemesEditorPastePopop
{

    val: any

    constructor
    (
        public popop: CommonNgPopopService,
        public json: CommonNgJsonService
    )
    {

    }

}