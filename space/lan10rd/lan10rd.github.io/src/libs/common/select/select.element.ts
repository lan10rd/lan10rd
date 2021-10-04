import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core'

@Component
({
  selector: 'common-select-element',
  templateUrl: './select.element.html',
  styleUrls: ['./select.element.scss']
})
export class CommonSelectElement
{

    @Input() option
    @Output() optionChange = new EventEmitter()
    @Input() options
    @Output() clicked = new EventEmitter()
    @Input() searchEnabled = false
    @Input() filterFun
    @Input() search = ''
    @Output() searchChange = new EventEmitter()

    constructor
    (
        public cd: ChangeDetectorRef
    )
    {
        
    }

    ngOnChanges
    (
        changes
    )
    {
        if (!(this.options.includes(this.option)))
            this.option = null
    }

    renderOptions
    (
    )
    {
        if (!this.searchEnabled)
            return this.options
        return this.search.trim().length > 0 ? this.options.filter(data => { return data.includes(this.search) || this.search.includes(data) }) : this.options
    }

}
