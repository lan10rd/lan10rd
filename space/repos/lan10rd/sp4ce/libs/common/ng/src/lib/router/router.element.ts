import { Component, ElementRef, Input } from '@angular/core'

import { CommonNgStylesService } from '../styles/styles.service'
import { CommonNgRouterService } from './router.service'

@Component
({
    selector : 'common-ng-router-element',
    templateUrl : './router.element.html',
    styleUrls : ['./router.element.scss']
})
export class CommonNgRouterElement
{

    listener$: any
    scrollPos = 0
    @Input() bodyPaddingTop = '4rem'

    constructor
    (
        public srv: CommonNgRouterService,
        public ref: ElementRef,
        public styles: CommonNgStylesService
    )
    {

    }

    async ngOnInit
    (
    )
    {
        this.styles.applyStyles(this.styles.document.document.body, {['padding-top']: this.bodyPaddingTop})
    }

    async ngAfterViewInit
    (
    )
    {
        // this.listener$ = fromEvent(window, 'scroll').subscribe($event => {
        window.addEventListener('scroll', $event => {
            let currentPos = window.pageYOffset
            this.ref.nativeElement.style.top = this.scrollPos > currentPos || currentPos - 32 <= 0 ? '0' : '-4rem'
            this.scrollPos = currentPos
        })
    }

    async ngOnDestroy
    (
    )
    {
        // this.listener$.unsubscribe()
    }

}
