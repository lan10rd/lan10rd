import { BrowserModule, HammerModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_INITIALIZER, NgModule, Injectable } from '@angular/core'
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS, HttpXsrfTokenExtractor } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ServiceWorkerModule } from '@angular/service-worker'

import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { AppHttpInterceptor } from './app.http.interceptor'
import { AppInitService } from './init/init.service';

import { CommonNgCoreDynamicElementModule } from '@grams/common/ng/core'

import { ScullyLibModule } from '@scullyio/ng-lib'

import * as Hammer from 'hammerjs'
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
    override overrides = <any> {
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

@NgModule
({
    imports:
    [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([], {useHash: false}),
        HttpClientModule,
        HttpClientXsrfModule,
        CommonNgCoreDynamicElementModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000'
        }),
        ScullyLibModule,
        HammerModule
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
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true,
            deps: [HttpXsrfTokenExtractor]
        },
        {
            provide: 'COMMON_CODE_SERVICE_MONACO_LOCATION',
            useValue: 'https://resources.glass.earth/static/js'
        },
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig
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