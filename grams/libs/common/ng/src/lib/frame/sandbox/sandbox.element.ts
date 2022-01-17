import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component
({
    selector: 'common-ng-frame-sandbox-element',
    templateUrl: './sandbox.element.html',
    styleUrls: ['./sandbox.element.scss']
})
export class CommonNgFrameSandboxElement
{

    @Input() snippet : any = `<div
style="background:white; height: 100%;"
>
    hello world!
</div>
`    
    @Output() snippetChange : any = new EventEmitter()

}