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
                rightButton: this.rightButton,
                rightBar: this.rightBar,
                rightView: this.rightView
            })
        }, 0)
    }

}