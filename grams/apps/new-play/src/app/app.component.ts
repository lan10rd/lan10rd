import { Component } from '@angular/core';

@Component({
  selector: 'grams-new-play',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  init: any = {
    module: async () => (await import('./init/init.module')).AppInitComponentModule,
    component: async () => (await import('./init/init.component')).AppInitComponent
  }
}
