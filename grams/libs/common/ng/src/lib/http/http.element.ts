import { Component, EventEmitter, Input, Output } from '@angular/core'

import { CommonNgHttpService } from './http.service'

@Component
({
    selector: 'common-ng-http-element',
    templateUrl: './http.element.html',
    styleUrls: ['./http.element.scss']
})
export class CommonNgHttpElement
{

    constructor
    (
        http: CommonNgHttpService
    )
    {

    }

    

}