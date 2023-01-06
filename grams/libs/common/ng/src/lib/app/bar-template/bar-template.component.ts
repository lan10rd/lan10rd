import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs'
import { CommonNgAppBarTemplateService } from './bar-template.service'

@Component
({
    selector: 'common-ng-app-bar-template',
    templateUrl: './bar-template.component.html',
    styleUrls: ['./bar-template.component.scss']
})
export class CommonNgAppBarTemplateComponent
{

    @ViewChild('barContainer') barContainer: ElementRef

    constructor(public barService: CommonNgAppBarTemplateService) {
        
    }

    ngAfterViewInit(){
        this.barService.barContainer = this.barContainer
        let prevScrollpos = window.pageYOffset;
        fromEvent(window, 'scroll').subscribe(data => {
            const currentScrollPos = window.pageYOffset;
            this.barContainer.nativeElement.style.top = prevScrollpos > (currentScrollPos) ? '0' : '-' + this.barService.barOffsetHeight + 'px'
            prevScrollpos = currentScrollPos
        })
    }

}