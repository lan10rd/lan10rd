import { Directive, ViewContainerRef } from '@angular/core'

@Directive
({
    selector: '[dynamic-host]'
})
export class CommonNgCoreDynamicDirective 
{

    constructor
    (
        public ref: ViewContainerRef
    )
    {

    }

}