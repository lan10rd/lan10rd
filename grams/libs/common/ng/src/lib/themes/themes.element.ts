import { Component, ChangeDetectionStrategy } from '@angular/core'

import { CommonNgThemesService } from './themes.service'

@Component
({
    selector: 'common-ng-themes-element', 
    templateUrl: './themes.element.html',
    styleUrls: ['./themes.element.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgThemesElement
{

    origin = location.origin

    constructor
    (
        public themes: CommonNgThemesService
    )
    {

    }

}