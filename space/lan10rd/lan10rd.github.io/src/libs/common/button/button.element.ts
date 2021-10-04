import { Component, Input } from '@angular/core'

@Component
({
    selector: 'common-button-element', 
    templateUrl: './button.element.html',
    styleUrls: ['./button.element.scss']
})
export class CommonButtonElement
{

    @Input() text = 'text'
    @Input() color = 'white'
    @Input() radius = '2.5px'
    @Input() toggle = false

    click(){
        console.log('click')
        this.toggle = !this.toggle
    }
    
}