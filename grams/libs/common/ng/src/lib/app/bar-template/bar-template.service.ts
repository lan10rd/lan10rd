import { Injectable, TemplateRef, ElementRef, ViewChild } from '@angular/core'
import { CommonNgStylesService } from '../../styles/styles.service'

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
    barOffsetHeight: number = 0

    barContainer: ElementRef
    barChild: ElementRef
    barView: ElementRef
    appliedBarStyles: any = {}

    constructor(
        public styles: CommonNgStylesService
    ){

    }

    styleBar(styles: any) {
        if (this.barContainer) {
            this.styles.unapplyStyles(this.barContainer.nativeElement, this.appliedBarStyles)
            this.styles.applyStyles(this.barContainer.nativeElement, styles)
        }
        this.appliedBarStyles = styles
    }

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
                const barAndViewHeight = this.barContainer.nativeElement.firstChild.offsetHeight + (this.barContainer.nativeElement.firstChild.nextSibling.offsetHeight ? this.barContainer.nativeElement.firstChild.nextSibling.offsetHeight : 0)
                document.body.style.overflow = barAndViewHeight >= bodyHeight ? 'hidden' : ''
                const wtf = barAndViewHeight + window.innerHeight // this fixes a bug where you can open a menu, scroll so that menu hides, then ctl + 0 zoom and no longer be able to scroll again
            }
        }, 0)
    }

}