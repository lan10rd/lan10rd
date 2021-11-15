import { Component, ElementRef, Input, ContentChildren } from '@angular/core'
import { fromEvent } from 'rxjs'

import { CommonNgStylesService } from '../../styles/styles.service'

@Component
({
    selector : 'common-ng-app-bar-element',
    templateUrl : './bar.element.html',
    styleUrls : ['./bar.element.scss']
})
export class CommonNgAppBarElement
{

    listener$: any
    scrollPos = 0

    constructor
    (
        public ref: ElementRef,
        public styles: CommonNgStylesService
    )
    {

    }

    async ngAfterViewInit
    (
    )
    {
        let current_height = this.ref.nativeElement.offsetHeight
        this.styles.applyStyles(this.styles.document.document.documentElement, {['padding-top']: current_height + 'px'})
        // this.listener$ = fromEvent(window, 'scroll').subscribe($event => {
        window.addEventListener('scroll', $event => {
            let current_pos = window.pageYOffset
            let current_height = this.ref.nativeElement.offsetHeight
            this.ref.nativeElement.style.top = this.scrollPos > current_pos ? '0' : '-' + current_height + 'px' // 
            this.scrollPos = current_pos
            this.styles.applyStyles(this.styles.document.document.documentElement, {['padding-top']: current_height + 'px'})
        })
    }

    async ngOnDestroy
    (
    )
    {
        // this.listener$.unsubscribe()
    }

}
