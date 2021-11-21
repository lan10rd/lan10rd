import { Component, EventEmitter, Input, Output } from '@angular/core'

import { CommonNgJsonService } from './json.service'

@Component
({
    selector: 'common-ng-json-element',
    templateUrl: './json.element.html',
    styleUrls: ['./json.element.scss']
})
export class CommonNgJsonElement
{

    @Input() object: any
    @Output() objectChange: any = new EventEmitter()

    keys: any = []

    constructor
    (
        public json: CommonNgJsonService
    )
    {

    }

    ngOnChanges
    (
        changes: any
    )
    {
        console.log('changes', changes)
        try { 
            this.keys = Object.keys(this.object)
         } catch(e) {
            console.log(e)
        }
    }

    changeKey
    (
        $event: any,
        i: number
    )
    {
        if ($event.trim().length > 0 && !($event in this.object))
        {
            this.object[$event] = this.object[this.keys[i]]
            delete this.object[this.keys[i]]
            this.keys = Object.keys(this.object)
        }
    }

}