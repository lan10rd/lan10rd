import { Component, ElementRef, Input, ContentChildren } from '@angular/core'
import { fromEvent } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

import { CommonNgStylesService } from '../../styles/styles.service'

@Component
({
    selector : 'common-ng-app-bar-element',
    templateUrl : './bar.element.html',
    styleUrls : ['./bar.element.scss']
})
export class CommonNgAppBarElement
{

    @Input() handleScroll: boolean = true
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
        // window.addEventListener('scroll', $event => {
        this.listener$ = fromEvent(window, 'scroll').pipe(
            // debounceTime(500)
        ).subscribe($event => {
            // setTimeout(() => {
                let current_pos = window.pageYOffset
                let current_height = this.ref.nativeElement.offsetHeight
                
                // this.ref.nativeElement.style.top = this.scrollPos > current_pos ? '0' : '-' + current_height + 'px' 
                // this.scrollPos = current_pos
                // this.styles.applyStyles(this.styles.document.document.documentElement, {['padding-top']: current_height + 'px'})

                if (this.handleScroll) // introduced this because scroll chaining on ios, doesnt listen overflow contain so when it hits the bottom of whatever is shown it starts scrolling the body underneath
                {
                    // requestAnimationFrame(() => {
                        if (this.scrollPos > current_pos || this.styles.document.document.documentElement.scrollTop === 0)
                        {
                            this.ref.nativeElement.style.top = '0'
                        }
                        else
                        {
                            this.ref.nativeElement.style.top = `-${current_height}px`
                        }
                    // })
                }
                

                this.scrollPos = current_pos
            // }, 0)
        
        })
    }

    async ngOnDestroy
    (
    )
    {
        if (this.listener$)
            this.listener$.unsubscribe()
    }

}
