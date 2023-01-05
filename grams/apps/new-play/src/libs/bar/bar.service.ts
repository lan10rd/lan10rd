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
export class BarService
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
        // if view is bigger than 100vh then should prevent body scroll right?

    }
    
    updateBar(bar: Partial<Bar>): Bar {
        this.bar = {...this.bar, ...bar}
        this.barOffsetHeight = this.barContainer.nativeElement.firstChild.offsetHeight
        document.body.style.paddingTop = this.barOffsetHeight + 'px'
        return this.bar
    }

}