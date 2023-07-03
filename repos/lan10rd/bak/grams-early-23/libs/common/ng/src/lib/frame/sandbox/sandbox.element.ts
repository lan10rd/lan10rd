import { Component, EventEmitter, Input, Output, Optional, Inject, ChangeDetectionStrategy } from '@angular/core'

@Component
({
    selector: 'common-ng-frame-sandbox-element',
    templateUrl: './sandbox.element.html',
    styleUrls: ['./sandbox.element.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgFrameSandboxElement
{

    @Input() snippet : any = `<div
style="background:white; height: 100%;"
>
    hello world!
</div>

<style>
html, body { margin: 0 }
</style>
`    
    @Output() snippetChange : any = new EventEmitter()
    @Input() editor: any

    constructor
    (
        @Optional() @Inject('COMMON_CODE_SERVICE_MONACO_LOCATION') public monaco_location : any
    )
    {

    }

    ngOnInit
    (        
    )
    {
        if (this.monaco_location && typeof this.editor === 'undefined')
            this.editor = true
    }

}