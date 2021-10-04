import { Component, ElementRef } from '@angular/core'
import { fromEvent } from 'rxjs'

import { CommonRouterService } from './router.service'

@Component
({
  selector: 'common-router-element',
  templateUrl: './router.element.html',
  styleUrls: ['./router.element.scss']
})
export class CommonRouterElement
{

    listener$
    scrollPos = 0

    constructor
    (
        public srv: CommonRouterService,
        public ref: ElementRef
    )
    {

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
