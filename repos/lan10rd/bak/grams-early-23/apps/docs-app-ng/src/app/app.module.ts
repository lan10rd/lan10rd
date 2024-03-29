import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS, HttpXsrfTokenExtractor } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ServiceWorkerModule } from '@angular/service-worker'
import { CommonNgCoreDynamicElementModule } from '@grams/common/ng/core'
import { ScullyLibModule } from '@scullyio/ng-lib'

import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { AppHttpInterceptor } from './app.http.interceptor'
import { AppInitService } from './init/init.service';

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
        ScullyLibModule
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
        // {
        //     provide: 'COMMON_CODE_SERVICE_MONACO_LOCATION',
        //     useValue: 'https://resources.glass.earth/static/js'
        // }
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