import { Component, ViewChild, ViewContainerRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonNgCoreDynamicDirective  } from './dynamic.directive';

@Component({
  selector: 'common-ng-core-dynamic-element',
  template: `<ng-template dynamic-host></ng-template>`,
  styles: []
})
export class CommonNgCoreDynamicElement {

    @ViewChild(CommonNgCoreDynamicDirective , {static: true}) dynamicHost!: CommonNgCoreDynamicDirective

    @Input('component') set component (value: any) {
        this._component = value
        this.loadComponent()
    }
    get component(){return this._component}
    _component

    @Input('module') set module (value: any) { this._module = value }
    get module(){return this._module}
    _module

    @Input('data') set data (value: any) { this._data = value}
    get data(){return this._data}
    _data

    async loadComponent() {
        let component = this.component
        if (typeof this.component === 'function') {
            if (typeof this.module === 'function') { }
            try { component = await this.component() } catch(e) { console.log('dynamic await e', e) }
        }
        if (this.component && this.dynamicHost)
        {
            const viewContainerRef = this.dynamicHost.ref;
            viewContainerRef.clear();
            
            const componentRef = viewContainerRef.createComponent<any>(component);
            componentRef.instance.data = this.data
        }
    }

    ngAfterViewInit(){
        this.loadComponent()
    }
}