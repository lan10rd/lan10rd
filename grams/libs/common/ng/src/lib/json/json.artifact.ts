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

    type: string = 'obj'
    keys: any = []
    raw: string = ''
    // editing: any = {
    //     keys: [],
    //     values: {}
    // }

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
                this.raw = this.json.stringify(this.model[key])
                break
            }
            case 'pretty':
            {
                this.model[key] = this.json.parse(this.raw)
                this.modelChange.emit(this.model)
                this.raw = ''
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
            this.modelChange.emit(this.model)
            this.setup()
        }
    }

    swap
    (
    )
    {

    }

}