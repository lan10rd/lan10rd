import { Component, ViewChild } from '@angular/core';

// import { BarService } from '../../libs/bar/bar.service'
import { CommonNgAppBarTemplateService } from '@grams/common/ng'

@Component
({
    selector: 'app-init-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})
export class AppInitBarComponent
{

    @ViewChild('leftButton') leftButton: any
    @ViewChild('leftBar') leftBar: any
    @ViewChild('leftView') leftView: any

    @ViewChild('middleBar') middleBar: any

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
            leftButton: this.leftButton,
            leftBar: this.leftBar,
            leftView: this.leftView,
            middleBar: this.middleBar,
            rightButton: this.rightButton,
            rightBar: this.rightBar,
            rightView: this.rightView
        }, true)
        this.barService.styleBar({
            'backdrop-filter': 'blur(5px)',
            '-webkit-backdrop-filter': 'blur(5px)'
        })
    }

}