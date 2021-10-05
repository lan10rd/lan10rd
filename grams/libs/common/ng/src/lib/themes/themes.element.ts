import { Component } from '@angular/core'

import { CommonNgThemesService } from './themes.service'

@Component
({
    selector: 'common-ng-themes-element', 
    templateUrl: './themes.element.html',
    styleUrls: ['./themes.element.scss']
})
export class CommonNgThemesElement
{

    constructor
    (
        public themes: CommonNgThemesService
    )
    {

    }

}