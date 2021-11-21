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
        this.keys = Object.keys(this.object)
    }

}