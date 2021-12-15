import {
    Component,
    Input,
    ViewChild,
    ComponentFactoryResolver,
    NgModuleFactory,
    Injector,
    Compiler,
    Renderer2
} from '@angular/core'

import { CommonNgDynamicDirective } from './dynamic.directive'

@Component
({
    selector: 'common-ng-dynamic-element',
    template: `<ng-template dynamic-host></ng-template><ng-content></ng-content>` // <ng-content></ng-content>
})
export class CommonNgDynamicElement
{
    
    @Input() module: any
    @Input() component: any
    @Input() data: any

    @ViewChild(CommonNgDynamicDirective, {static: true}) host: CommonNgDynamicDirective | any

    compRef: any

    constructor
    (
        public resolver: ComponentFactoryResolver,
        public compiler: Compiler,
        public injector: Injector,
        public renderer: Renderer2
    )
    {
        
    }

    ngOnChanges
    (
        changes: any
    )
    {
        if ('component' in changes || 'module' in changes)
            this.load()
        if ('data' in changes && this.compRef)
            this.setData()
    }

    async load
    (
    )
    {
        let component = this.component
        try { component = (await this.component()) } catch(e) { } 
        if (component)
        {
            if (this.module)
            {
                let module = this.module
                try { module = await this.module() } catch(e) { }
                let factory = module instanceof NgModuleFactory ? module : await this.compiler.compileModuleAsync(module)
                let compFactory = factory.create(this.injector).componentFactoryResolver.resolveComponentFactory(component)
                this.host.ref.clear()
                this.compRef = this.host.ref.createComponent(compFactory)
            }
            else
            {
                this.host.ref.clear()
                this.compRef = this.host.ref.createComponent(this.resolver.resolveComponentFactory(component))            
            }
            this.setData()
            // console.log('this.compRef', this.compRef, 'this.host', this.host.ref)
            // this.renderer.appendChild(this.host.ref.element.nativeElement, this.renderer.createElement('ng-content'))

        }
    }

    setData
    (
    )
    {
        if (this.data)
            Object.keys(this.data).forEach(key => { this.compRef.instance[key] = this.data[key] })
    }

}