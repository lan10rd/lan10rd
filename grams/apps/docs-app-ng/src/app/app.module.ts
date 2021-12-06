import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { environment } from '../environments/environment'

import { CommonNgDynamicElementModule } from '@grams/common/ng'

import { AppComponent } from './app.component'
import { AppInitService } from './init/init.service';
import { ServiceWorkerModule } from '@angular/service-worker'

// import { AppHttpInterceptor } from './app.http.interceptor'

// import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule
({
    imports:
    [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
        HttpClientXsrfModule,
        CommonNgDynamicElementModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: 
    [
        {
            provide: APP_INITIALIZER,
            useFactory: (appInit: AppInitService) => { return (): Promise<any> => { return appInit.initialize() } },
            multi: true,
            deps: [AppInitService]
        },
        {
            provide: 'API',
            useValue: (environment.production ? location.origin : !isNaN(+location.host.split('.')[0]) ? location.origin.split('4200').join('3000') : location.protocol + '//' + location.host.split('.')[0] + '-api' + location.host.split(location.host.split('.')[0])[1])
        }
    ],
    exports:
    [

    ],
    declarations:
    [
        AppComponent
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
    
}