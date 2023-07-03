import { Component, ElementRef, Input } from '@angular/core'

import { CommonNgRouterService } from './router.service'
import { CommonNgDocumentService  } from '../document/document.service'

@Component
({
    selector : 'common-ng-router-element',
    templateUrl : './router.element.html',
    styleUrls : ['./router.element.scss']
})
export class CommonNgRouterElement
{

    constructor
    (
        public srv: CommonNgRouterService,
        public document: CommonNgDocumentService,
        public ref: ElementRef
    )
    {

    }
    
}