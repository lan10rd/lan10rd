import { Component, Input, ViewChild, ComponentFactoryResolver, NgModuleFactory, Injector, Compiler } from '@angular/core'

import { CommonDynamicDirective } from './dynamic.directive'

@Component
({
    selector: 'common-dynamic-element',
    template: `<ng-template dynamic-host></ng-template>`
})
export class CommonDynamicElement
{
    
    @Input() module: any
    @Input() component: any

    @Input() modulePath: string
    @Input() componentPath: string

    @ViewChild(CommonDynamicDirective, {static: true}) host: CommonDynamicDirective
    @Input() data: any

    compRef

    constructor
    (
        public resolver: ComponentFactoryResolver,
        public compiler: Compiler,
        public injector: Injector
    )
    {
        
    }

    ngOnChanges
    (
        changes
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
        if (this.module)
        {
            let factory = this.module instanceof NgModuleFactory ? this.module : await this.compiler.compileModuleAsync(this.module)
            let compFactory = factory.create(this.injector).componentFactoryResolver.resolveComponentFactory(this.component)
            this.host.ref.clear()
            this.compRef = this.host.ref.createComponent(compFactory)
        }
        else
        {
            this.host.ref.clear()
            this.compRef = this.host.ref.createComponent(this.resolver.resolveComponentFactory(this.component))            
        }
        this.setData()
    }

    setData
    (
    )
    {
        if (this.data)
            Object.keys(this.data).forEach(key => { this.compRef.instance[key] = this.data[key] })
    }

}