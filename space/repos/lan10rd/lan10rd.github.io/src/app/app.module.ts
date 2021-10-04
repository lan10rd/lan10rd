import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'

import { AppRoutingModule } from './app.routing.module'
import { App } from './app'
import { AppInitService } from './init/init.service'

import { environment } from '../environments/environment'

import { CommonDynamicElementModule } from '../libs/common/dynamic/dynamic.element.module'

@NgModule
({
  declarations:
  [
    App
  ],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CommonDynamicElementModule
  ],
  providers:
  [
    {
      provide: APP_INITIALIZER,
      useFactory: (appInit: AppInitService) => {
        return (): Promise<any> => { return appInit.initialize() }
      },
      multi: true,
      deps: [AppInitService]
    },
    {
      provide: 'COMMON_GOOGLE_USER',
      useValue: {
          clientId: '497104406300-g3e0gceqcp5dtu1f24p5omdipj1g4fmm.apps.googleusercontent.com',
          secret: 'ORkxcINEXFTaj0d21mc_OzJf',
          script: 'https://apis.google.com/js/platform.js',
          verifyEndpoint: location.hostname === 'localhost' ? location.protocol + '//' + document.domain + ':3000' : location.origin.split('systems').join('systems-api') + '/systems/play/verify'
      }
    }
  ],
  bootstrap:
  [
    App
  ]
})
export class AppModule
{

}
