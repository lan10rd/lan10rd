import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

@Component
({
    selector: 'common-ng-button-element', 
    templateUrl: './button.element.html',
    styleUrls: ['./button.element.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgButtonElement
{

    @Input() text : string = ''
    @Input() toggle : boolean = false
    @Output() toggleChange : any = new EventEmitter()

    // @Input() color : string = 'inherit'
    // @Input() trim : any // 'text-shadow: 0px 0px 1px rgb(255 255 255)' // angle distance blur color
    // @Input() radius : any = '2.5px'
    // @Input() toggleable : boolean = false

    toggleButton
    (
    )
    {
        // if (this.toggleable)
        // {
            this.toggle = !this.toggle
            this.toggleChange.emit(this.toggle)
        // }
    }
    
}