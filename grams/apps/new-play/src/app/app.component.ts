import { Component } from '@angular/core';

@Component({
  selector: 'grams-new-play',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  module: any
  component: any
  async ngOnInit(){
    this.module = (await import('./init/init.module')).AppInitComponentModule
    this.component = (await import('./init/init.component')).AppInitComponent
  }
}
