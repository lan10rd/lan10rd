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
(keyup.enter)="input()"
>
`,
    styles :[]
})
export class CommonNgCodeTerminalElement
{

    @Input() io : string = ''
    @Input() input_color : string = '\u001B[37m'
    @Input() output_color : string = '\u001b[32m'
    @Input() sign : string = '$'
    @Input() styles : string = `display: block; max-height: 50vh; overflow-y: scroll; background-color: rgb(0, 0, 0, .77); border-radius: 7px;`
    @Input() addedStyles : string = ``
    @Output() exec : any = new EventEmitter()
    
    _exec : string = ''

    input
    (
    )
    {
        this.io += this.input_color + this.sign + ' ' + this._exec + '\u001b[0m\n'
        this.exec.emit(this._exec)
        this._exec = ''
    }

    output
    (
        s: string
    )
    {
        this.io += this.output_color + s + '\u001b[0m\n'
    }

}