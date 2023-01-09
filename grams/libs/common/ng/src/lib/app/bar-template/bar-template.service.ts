import { Injectable, TemplateRef, ElementRef } from '@angular/core'

export type MiddleDirection = 'center' | 'left' | 'right';
export interface Bar {
    leftButton?: TemplateRef<any>
    leftBar?: TemplateRef<any>
    leftView?: TemplateRef<any>
    rightButton?: TemplateRef<any>
    rightBar?: TemplateRef<any>
    rightView?: TemplateRef<any>
    middleBar?: TemplateRef<any>
}

@Injectable
({
    providedIn: 'root'
})
export class CommonNgAppBarTemplateService
{

    middleDirection: MiddleDirection = 'center'
    bar: Bar = { }
    barContainer: ElementRef
    barOffsetHeight: number = 0

    changeMiddleDirection(direction: MiddleDirection){
        if (this.middleDirection === 'center') {
            this.middleDirection = direction
        } else if (this.middleDirection === direction){
            this.middleDirection = 'center'
        } else {
            this.middleDirection = direction
        }
        this.handleBodyScrollbarOverscroll()
    }
    
    updateBar(bar: Partial<Bar>): void {
        this.bar = {...this.bar, ...bar}
        setTimeout(() => {
            if (this.barContainer) {
                this.barOffsetHeight = this.barContainer.nativeElement.firstChild.offsetHeight
                document.body.style.paddingTop = this.barOffsetHeight + 'px'
                this.handleBodyScrollbarOverscroll()
            }
        }, 0)
    }
    /* css alone not able to make body content scroll underneath while scrolling the view, and needed set timeout because must be a race condition between after view checked as view is in an ngif */
    handleBodyScrollbarOverscroll() {
        setTimeout(()=> {
            if (this.barContainer) {
                const bodyHeight = window.innerHeight
                const barAndViewHeight = this.barContainer.nativeElement.firstChild.offsetHeight + this.barContainer.nativeElement.firstChild.nextSibling.offsetHeight
                if (barAndViewHeight >= bodyHeight) {
                    document.body.style.overflow = 'hidden'
                } else {
                    document.body.style.overflow = ''
                }
            }
        }, 0)
    }

}