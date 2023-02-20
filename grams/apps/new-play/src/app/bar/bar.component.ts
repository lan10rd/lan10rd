import { Component, ViewChild } from '@angular/core';

// import { BarService } from '../../libs/bar/bar.service'
import { CommonNgAppBarTemplateService } from '@grams/common/ng'

@Component
({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})
export class AppBarComponent
{

    @ViewChild('leftButton') leftButton: any
    @ViewChild('leftBar') leftBar: any
    @ViewChild('leftView') leftView: any
    @ViewChild('rightButton') rightButton: any
    @ViewChild('rightBar') rightBar: any
    @ViewChild('rightView') rightView: any
    
    constructor
    (
        public barService: CommonNgAppBarTemplateService
    )
    {

    }

    ngAfterViewInit(){
        setTimeout(() => {
            this.barService.updateBar({
                leftButton: this.leftButton,
                leftBar: this.leftBar,
                leftView: this.leftView,
                rightButton: this.rightButton,
                rightBar: this.rightBar,
                rightView: this.rightView
            })
            this.barService.styleBar({
                'backdrop-filter': 'blur(5px)',
                '-webkit-backdrop-filter': 'blur(5px)'
            })
        }, 0)
    }

}