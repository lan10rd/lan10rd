// import {
//     Component,
//     Input,
//     Output,
//     EventEmitter,
//     ViewChild,
//     ComponentFactoryResolver,
//     // NgModuleFactory,
//     Injector,
//     // Compiler,
//     Renderer2,
//     // ChangeDetectionStrategy,
//     // ɵcreateInjector as createInjector,
//     // ɵrenderComponent as renderComponent,
//     // ɵLifecycleHooksFeature as LifecycleHooksFeature,
//     ViewContainerRef,
//     ChangeDetectionStrategy
// } from '@angular/core'
// import { CommonNgDynamicDirective } from './dynamic.directive'

// // import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal'

// @Component
// ({
//     selector: 'common-ng-dynamic-element',
//     template: `<ng-template dynamic-host></ng-template><ng-content></ng-content><ng-container #containerHost></ng-container>`, // <ng-content></ng-content>
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CommonNgDynamicElement
// {
    
//     @Input() module: any
//     @Input() component: any
//     @Input() data: any

//     @Output() load: any = new EventEmitter()

//     @ViewChild(CommonNgDynamicDirective, {static: true}) host: CommonNgDynamicDirective | any
//     @ViewChild('containerHost', { read: ViewContainerRef, static: true }) public containerHost: ViewContainerRef | any

//     compRef: any

//     constructor
//     (
//         public resolver: ComponentFactoryResolver,
//         // public compiler: Compiler,
//         public injector: Injector,
//         public renderer: Renderer2
//     )
//     {
        
//     }

//     ngOnChanges
//     (
//         changes: any
//     )
//     {
//         if ('component' in changes || 'module' in changes)
//             this.handleLoad()
//         if ('data' in changes && this.compRef)
//             this.setData()
//     }

//     // async showContainer(){
//     //     // let module = await this.module
//     //     // const injector = createInjector(module, this.injector)
//     //     // const carouselModule = injector.get(module)

//     //     // const componentFactory = carouselModule.resolveCarouselComponentFactory()
//     //     // const componentRef = this.containerHost.createComponent(componentFactory)
//     //     // componentRef.changeDetectorRef.markForCheck()
//     //     let module = this.module
//     //     const injector = createInjector(module, this.injector);
//     //     const carouselModule = injector.get(this.module);
//     //     const host = new DomPortalOutlet(
//     //         viewContainerRef.element.nativeElement,
//     //         this.resolver,
//     //         this.app,
//     //         this.injector
//     //     );
    
//     //     const portal = new ComponentPortal(
//     //         CarouselComponent,
//     //         viewContainerRef,
//     //         this.injector,
//     //         this.resolver
//     //     );
    
//     //     const componentRef = portal.attach(host);
//     //     componentRef.changeDetectorRef.markForCheck();
//     //     return componentRef;
//     // }

//     async handleLoad
//     (
//     )
//     {
//         let component = this.component
//         try { component = (await this.component()) } catch(e) { } 
//         if (component)
//         {
//             if (this.module) // really this may not be necessary but just loading with async () => { await import }) !
//             {
//                 let module = this.module
//                 /* forgot why i have this try catch, something about trying to await the import or something or maybe if its a function? */
//                 try { module = await this.module() } catch(e) { /* console.log('await this.module e', e) */ }


//                 // if (!(module instanceof NgModuleFactory))
//                 // {
//                 //     console.log('module is not instance of ng module factory and needs compiling!', module)
//                 // }
//                 // else
//                 // {
//                 //     console.log('module is ngmodulefactoyr', module)
//                 // }

//                 // let injector = createInjector(module, this.injector) as any
//                 // console.log('injector', injector )
//                 // module =  injector.get(module)
//                 // console.log('factories', this.resolver.resolveComponentFactory(component))
//                 this.host.ref.clear()
//                 this.compRef = this.host.ref.createComponent(this.resolver.resolveComponentFactory(component))
                
//                 // let render = renderComponent(component, {injector: injector, host: this.containerHost})
//                 // console.log('render')

//                 // let compFactory: any = this.resolver.resolveComponentFactory(component)
//                 // console.log('compFactory', compFactory)
//                 // let factory = module instanceof NgModuleFactory ? module : await this.compiler.compileModuleAsync(module)
//                 // let compFactory = factory.create(this.injector).componentFactoryResolver.resolveComponentFactory(component)
//                 // this.host.ref.clear()
//                 // this.compRef = this.host.ref.createComponent(compFactory)
//             }
//             else
//             {
//                 this.host.ref.clear()
//                 this.compRef = this.host.ref.createComponent(this.resolver.resolveComponentFactory(component))            
//             }
//             this.setData()
//             // console.log('this.compRef', this.compRef, 'this.host', this.host.ref)
//             // this.renderer.appendChild(this.host.ref.element.nativeElement, this.renderer.createElement('ng-content'))
//         }
//         this.load.emit(this.compRef.instance)
//     }

//     setData
//     (
//     )
//     {
//         if (this.data)
//             Object.keys(this.data).forEach(key => { this.compRef.instance[key] = this.data[key] })
//     }

// }

import { Component, ViewChild, Input } from '@angular/core';
import { CommonNgDynamicDirective  } from './dynamic.directive';

@Component({
  selector: 'common-ng-dynamic-element',
  template: `<ng-template dynamic-host></ng-template>`,
  styles: [],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgDynamicElement {

    @ViewChild(CommonNgDynamicDirective , {static: true}) dynamicHost!: CommonNgDynamicDirective
    @Input('component') component: any
    @Input('module') module: any
    @Input('data') data: any

    loadComponent(): void {
        if (this.component && this.dynamicHost)
        {
            const viewContainerRef = this.dynamicHost.ref;
            viewContainerRef.clear();
            
            const componentRef = viewContainerRef.createComponent<any>(this.component);
            componentRef.instance.data = this.data
        }
    }

    ngOnChanges(changes: any){
        this.loadComponent()
    }

    ngAfterViewInit(){
        this.loadComponent()
    }
}
