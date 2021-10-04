import { Directive, ViewContainerRef } from '@angular/core'

@Directive
({
    selector: '[dynamic-host]'
})
export class CommonDynamicDirective 
{

    constructor
    (
        public ref: ViewContainerRef
    )
    {

    }

}