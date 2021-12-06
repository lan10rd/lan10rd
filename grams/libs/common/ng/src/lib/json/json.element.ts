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
    @Input() mode : any = 'pretty'

    type: string = 'obj'
    keys: any = []
    editing: any = {
        keys: [],
        values: {}
    }

    constructor
    (
        public json: CommonNgJsonService
    )
    {

    }

    ngOnInit
    (
    )
    {
        this.type = this.json.typeOf(this.object)
    }

    ngOnChanges
    (
        changes: any
    )
    {
        try
        { 
            if (this.type === 'obj')
                this.keys = Object.keys(this.object)
            else if (this.type === 'arr')
            {
                let indexes: any[] = []
                for (let i = 0; i < this.object.length; i++)
                    indexes.push(i)
                this.keys = indexes
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }

    changeKey
    (
        $event: any,
        i: number
    )
    {
        console.log('change key $event', $event)
        let new_key = $event
        let old_key = this.keys[i]
        if (new_key.length > 0 && !(new_key in this.object))
        {
            this.object[new_key] = this.object[old_key]
            delete this.object[old_key]
            if (this.editing.keys.includes(old_key))
            {
                this.editing.keys = this.json.remove(this.editing.keys, old_key)
                this.editing.keys.push(new_key)
            }
            this.keys = Object.keys(this.object)
        }
    }

    handleMode
    (
        $event: any,
        key: string
    )
    {
        switch($event)
        {
            case 'raw':
            {
                this.editing.values[key] = this.json.stringify(this.object[key])
                break
            }
            case 'pretty':
            {
                if (key in this.editing.values)
                {
                    delete this.editing.values[key]
                }
                break
            }
            default:
                break
        }
    }

}