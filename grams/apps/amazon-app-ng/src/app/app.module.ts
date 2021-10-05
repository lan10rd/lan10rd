import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiScrollModule } from 'ngx-ui-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiScrollModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
