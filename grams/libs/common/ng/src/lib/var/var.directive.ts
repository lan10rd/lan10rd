import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core'

//usage
/*
*ngVar="srv._magic.stacks.json.services[targetService] as service"
*/
/* note you can do the following instead and doesnt seem to struggle with flashing as the view changes!
*ngIf="{x: 'hi', y: true, z: {yo: 'a'}} as someVariable"
*/

@Directive
({
    selector: '[ngVar]',
})
export class CommonNgVarDirective
{

    @Input()
    set ngVar
    (
        context: any
    )
    {
        this.context.$implicit = this.context.ngVar = context
        this.updateView()
    }

    context: any = {}

    constructor
    (
        private vcRef: ViewContainerRef,
        private templateRef: TemplateRef<any>
    )
    {

    }

    updateView
    (
    )
    {
        this.vcRef.clear()
        this.vcRef.createEmbeddedView(this.templateRef, this.context)
    }
}