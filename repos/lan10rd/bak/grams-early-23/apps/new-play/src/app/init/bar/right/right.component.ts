import { Component, ViewChild } from '@angular/core'

import { CommonNgAppBarTemplateService } from '@grams/common/ng'

@Component
({
    selector: 'app-init-bar-right',
    templateUrl: './right.component.html',
    styleUrls: ['./right.component.scss']
})
export class AppInitBarRightComponent
{
    @ViewChild('rightButton') rightButton: any
    @ViewChild('rightBar') rightBar: any
    @ViewChild('rightView') rightView: any

    rightBarOption
    
    constructor
    (
        public barService: CommonNgAppBarTemplateService
    )
    {

    }

    ngAfterViewInit() {
        this.barService.updateBar({
            rightButton: this.rightButton,
            rightBar: this.rightBar,
            rightView: this.rightView
        }, true)
    }

}