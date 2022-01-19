import { Component, EventEmitter, Input, Output } from '@angular/core'

import { CommonNgJoiService } from './joi.service'

@Component
({
    selector: 'common-ng-joi-element',
    templateUrl: './joi.element.html',
    styleUrls: ['./joi.element.scss']
})
export class CommonNgJoiElement
{

    constructor
    (
        public joi: CommonNgJoiService
    )
    {

    }

}