import { Component, ViewChild } from '@angular/core'

import { CommonNgAppBarTemplateService, CommonNgRouterService } from '@grams/common/ng'

@Component
({
    selector: 'app-init-bar-left',
    templateUrl: './left.component.html',
    styleUrls: ['./left.component.scss']
})
export class AppInitBarLeftComponent
{
    @ViewChild('leftButton') leftButton: any
    @ViewChild('leftBar') leftBar: any
    @ViewChild('leftView') leftView: any

    leftBarOption
    
    constructor
    (
        public barService: CommonNgAppBarTemplateService,
        public router: CommonNgRouterService
    )
    {

    }

    ngAfterViewInit() {
        this.barService.updateBar({
            leftButton: this.leftButton,
            leftBar: this.leftBar,
            leftView: this.leftView
        }, true)
    }

}