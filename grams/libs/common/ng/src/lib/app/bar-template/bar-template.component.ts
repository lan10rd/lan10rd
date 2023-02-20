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
    @ViewChild('barChild') barChild
    @ViewChild('barView') barView
    prevScrollPos

    constructor(public barService: CommonNgAppBarTemplateService) {
        
    }

    ngOnInit(){
        this.barService.barContainer = this.barContainer
        this.barService.barChild = this.barChild
        this.barService.barView = this.barView
        fromEvent(window, 'scroll').subscribe(data => {
            if (this.prevScrollPos && this.barChild) {
                const currentScrollPos = window.pageYOffset
                this.barContainer.nativeElement.style.top = this.prevScrollPos > currentScrollPos ? '0' : '-' + this.barChild.nativeElement.offsetHeight + (this.barView ? this.barView.nativeElement.offsetHeight : 0) + 'px'
                this.prevScrollPos = currentScrollPos
            } else {
                this.prevScrollPos = window.pageYOffset
            }
        })
        fromEvent(window, 'resize').subscribe(data => {
            this.barService.handleBodyScrollbarOverscroll()
        })
    }
    
    ngAfterViewInit(){
        this.barService.handleBodyScrollbarOverscroll()
    }

}