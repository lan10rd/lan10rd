import { NgModule, APP_INITIALIZER } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientJsonpModule } from '@angular/common/http'
import { CommonHttpXsrfInterceptor } from '../../../../libs/common/http/xsrf/xsrf.interceptor.ng'
import { CommonHttpXsrfService } from '../../../../libs/common/http/xsrf/xsrf.service.ng'

let appInitializer = (xsrfService: CommonHttpXsrfService) => { return () => { return xsrfService.loadAppConfig() } }

@NgModule
({
    declarations: 
    [

    ],
    imports: 
    [
        CommonModule,
        HttpClientModule
    ],
    exports: 
    [

    ],
    providers: 
    [
        CommonHttpXsrfService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [CommonHttpXsrfService] 
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CommonHttpXsrfInterceptor,
            multi: true
        }
    ]
}) 
export class CommonHttpXsrfModule
{

}