import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core'

@Component
({
    selector : 'common-ng-scroll-element',
    templateUrl : './scroll.element.html',
    styleUrls : ['./scroll.element.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgScrollElement
{

    @Input() classes : any
    @Input() styles : any
    @Output() scroll : any = new EventEmitter()
    @ViewChild('child') child : any

    ngOnInit
    (
    )
    {
        if (!this.classes)
            this.classes = 'scrollable tcenter bl'
        else
            this.classes = 'scrollable ' + this.classes
        if (!this.styles) this.styles = ''
    }
}