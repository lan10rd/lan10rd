import { Component } from '@angular/core'
import { CommonRouterService } from '../../libs/common/router/router.service'

@Component
({
    selector: 'app-init-element',
    templateUrl: './init.element.html',
    styleUrls: ['./init.element.scss']
})
export class AppInitElement
{

    constructor
    (
        public router: CommonRouterService
    )
    {

    }

}