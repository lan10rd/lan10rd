import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs'
import { CommonNgAppBarTemplateService } from './bar-template.service'

@Component
({
    selector: 'common-ng-app-bar-template',
    templateUrl: './bar-template.component.html',
    styleUrls: ['./bar-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgAppBarTemplateComponent
{

    @Input('zIndex') zIndex = 1
    @ViewChild('barContainer') barContainer: ElementRef
    @ViewChild('barChild') barChild
    @ViewChild('barView') barView
    prevScrollPos

    constructor(
        public barService: CommonNgAppBarTemplateService,
        public cdr: ChangeDetectorRef
    ) {
        
    }

    ngOnInit(){
        this.barService.cdr = this.cdr
        this.barService.zIndex = this.zIndex
        fromEvent(window, 'scroll').subscribe($event => {
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
        this.barService.barContainer = this.barContainer
        this.barService.barChild = this.barChild
        this.barService.barView = this.barView
        this.barService.setOffsetHeight()
    }

    scrollme($event){
        this.barService.handleBodyScrollbarOverscroll()
    }

}