import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs'
import { BarService } from './bar.service'

@Component
({
    selector: 'bar-component',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})
export class BarComponent
{

    @ViewChild('barContainer') barContainer: ElementRef

    constructor(public barService: BarService) {
        
    }

    ngAfterViewInit(){
        this.barService.barContainer = this.barContainer
        let prevScrollpos = window.pageYOffset;
        fromEvent(window, 'scroll').subscribe(data => {
            // console.log('scroll')
            const currentScrollPos = window.pageYOffset;
            this.barContainer.nativeElement.style.top = prevScrollpos > (currentScrollPos) ? '0' : '-' + this.barService.barOffsetHeight + 'px'
            prevScrollpos = currentScrollPos
        })
    }

}