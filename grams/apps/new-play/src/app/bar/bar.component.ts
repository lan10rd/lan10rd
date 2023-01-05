import { Component, ViewChild } from '@angular/core';

import { BarService } from '../../libs/bar/bar.service'

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
        public barService: BarService
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