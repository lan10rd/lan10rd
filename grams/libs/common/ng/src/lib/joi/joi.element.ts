import { Component, EventEmitter, Input, Output } from '@angular/core'

import { CommonNgJoiService } from './joi.service'
import { CommonNgJsonService } from '../json/json.service'

import * as Joi from 'joi'

@Component
({
    selector: 'common-ng-joi-element',
    templateUrl: './joi.element.html',
    styleUrls: ['./joi.element.scss']
})
export class CommonNgJoiElement
{
    
    joi_template: any
    joi_validation: any
    @Input() template: string = ''
    @Output() templateChange: any = new EventEmitter()
    @Input() data: string = '{}'
    @Output() dataChange: any = new EventEmitter()

    example_template: any = `Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
        repeat_password: Joi.ref("password"),
        access_token: [Joi.string(), Joi.number()],
        birth_year: Joi.number().integer().min(1900).max(2013),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } } )
      }).with('username', 'birth_year').xor('password', 'access_token').with('password', 'repeat_password').options({ abortEarly: false })`
    example_data: any = `{ 
        username: "ab",
        password: "password",
        repeat_password: "password!",
        birth_year: 1994
       }`

    constructor
    (
        public joi: CommonNgJoiService,
        public json: CommonNgJsonService
    )
    {

    }

    async setup
    (
    )
    {
        try
        {
            let hi = 'hihihi'
            let Joi = this.joi.Joi
            // let evaluate = this.json.eval
            try { new Function('return ' + this.template)() } catch(e) { console.log('new fun e', e)}
            try { this.joi_template = eval('(function() { return ' + this.template + '}())'); console.log('this.joi_template', this.joi_template) } catch(e) { console.log('eval fun')}
            // console.log('joi_template after eval', this.joi_template)
        }
        catch(e)
        {
            console.log('setup e', e)
        }
    }

    async validate
    (
    )
    {
        try
        {
            this.joi_validation = this.joi_template.validate(this.json.parse(this.data, false))
            return this.joi_validation
        }
        catch(e)
        {
            console.log('validate e', e)
        }
    }

}