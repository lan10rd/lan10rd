import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component
({
    selector : 'common-ng-code-terminal-element',
    template :
`
<common-ng-code-logs-element
[logs]="io"
style="{{styles + addedStyles}}"
></common-ng-code-logs-element>

<input
[(ngModel)]="_exec"
(keyup.enter)="enter()"
>
`,
    styles :[]
})
export class CommonNgCodeTerminalElement
{

    @Input() io : string = ''
    @Input() color : string = '\u001b[32m'
    @Input() sign : string = '$'
    @Input() styles : string = `display: block; max-height: 50vh; overflow-y: scroll; background-color: rgb(0, 0, 0, .77); border-radius: 7px;`
    @Input() addedStyles : string = ``
    @Output() exec : any = new EventEmitter()
    
    _exec : string = ''

    enter
    (
    )
    {
        this.io += this.io + this.color + this.sign + ' ' + this.exec + '\u001b[0m\n'
        this.exec.emit(this._exec)
        this._exec = ''
    }

}