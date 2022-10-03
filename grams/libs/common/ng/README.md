# common-ng

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test common-ng` to execute the unit tests.

nx build common-ng && cd dist/libs/common/ng && npm publish --scope=@lan10rdjs --access public

what is ng/core and why not in ng/src? turns out to get the benefits of lazy loading with dynamic element (when used in app component), the bundle size of main.js is still bloaty unless its in a separate folder for whatever reason.  once you use the core import instead your bundle size is only as big as dynamic element and you can stuff whatever you want in the app init component.

app/
 init/
   lots of stuff we dont want to blow up main.js with
 component.html
  <common-ng-core-dynamic-element [component]="component" [module]="module" *ngIf="init"></common-ng-core-dynamic-element>
 component.ts
  init: any
  ngOnInit(){
    // probably could get away with initializting init, but if we use ngOnInit instead it may load faster, but you would want to add an ngIf to common-ng-core-dynamic-element
    this.init = {
    module: async () => (await import('./init/init.element.module')).AppInitElementModule,
    component: async () => (await import('./init/init.element')).AppInitElement
   }
  }

  everywhere else in your app you can get away with using the dynamic element not the the core one, we only need core for init