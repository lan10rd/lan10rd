import { Component, EventEmitter, Input, Output } from '@angular/core'

import { CommonNgJsonService } from './json.service'

@Component
({
    selector: 'common-ng-json-artifact',
    templateUrl: './json.artifact.html',
    styleUrls: ['./json.artifact.scss']
})
export class CommonNgJsonArtifact
{

    @Input() model : any
    @Output() modelChange : any = new EventEmitter()
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

    ngOnChanges
    (
        changes: any
    )
    {
        this.setup()
    }

    setup
    (
    )
    {
        try
        { 
            this.type = this.json.typeOf(this.model)
            if (this.type === 'obj')
                this.keys = Object.keys(this.model)
            else if (this.type === 'arr')
            {
                let indexes: any[] = []
                for (let i = 0; i < this.model.length; i++)
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
        let new_key = $event
        let old_key = this.keys[i]
        if (new_key.length > 0 && !(new_key in this.model))
        {
            this.model[new_key] = this.model[old_key]
            delete this.model[old_key]
            if (this.editing.keys.includes(old_key))
            {
                this.editing.keys = this.json.remove(this.editing.keys, old_key)
                this.editing.keys.push(new_key)
            }
            this.keys = Object.keys(this.model)
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
                this.editing.values[key] = this.json.stringify(this.model[key])
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

    addField
    (
        key: string,
        value: string,
        type: string = 'string'
    )
    {
        if (key.length > 0 && !(key in this.model))
        {
            this.model[key] = this.json.parse(value)
            this.setup()
        }
    }

    toggleEditKey
    (
        key: string
    )
    {
        if (this.type === 'obj')
            this.editing.keys.push(key)
    }

    insert
    (
        value: any,
        index: any
    )
    {
        this.model.splice(index, 0, this.json.parse(value))
        this.setup()
    }

    swap
    (
    )
    {

    }

}