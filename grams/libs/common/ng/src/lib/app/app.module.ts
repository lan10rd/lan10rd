import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS, HttpXsrfTokenExtractor } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScullyLibModule } from '@scullyio/ng-lib'
import { CommonNgCoreDynamicElementModule } from '@grams/common/ng/core'

const environment = {
  production: false
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot([], {useHash: false}),
    ScullyLibModule,
    CommonNgCoreDynamicElementModule
  ],
  exports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ServiceWorkerModule,
    ScullyLibModule,
    CommonNgCoreDynamicElementModule
  ]
})
export class CommonAppModule {}
