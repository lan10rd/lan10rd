import { Directive, ViewContainerRef } from '@angular/core'

@Directive
({
    selector: '[dynamic-host]'
})
export class CommonNgDynamicDirective 
{

    constructor
    (
        public ref: ViewContainerRef
    )
    {

    }

}