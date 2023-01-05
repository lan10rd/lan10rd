import { Component, ViewChild, ViewContainerRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';

@Component({
  selector: 'dynamic-component',
  template: `<ng-template dynamicHost></ng-template>`,
  styles: [],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent {

    @ViewChild(DynamicDirective, {static: true}) dynamicHost!: DynamicDirective;
    @Input('component') component: any
    @Input('module') module: any
    @Input('data') data: any

    loadComponent(): void {
        if (this.component && this.dynamicHost)
        {
            const viewContainerRef = this.dynamicHost.viewContainerRef;
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
