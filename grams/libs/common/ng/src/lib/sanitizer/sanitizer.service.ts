import { Injectable } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgSanitizerService
{

    constructor(private sanitizer: DomSanitizer) {}

    bypass(value: any, type: 'url' | 'resourceUrl' | 'html' | 'script' | 'style' = 'html')
    {
        switch(type)
        {
            case 'html': {return this.bypassSecurityTrustHtml(value)}
            case 'style': {return this.bypassSecurityTrustStyle(value)}
            case 'script':{return this.bypassSecurityTrustScript(value)}
            case 'url': {return this.bypassSecurityTrustUrl(value)}
            case 'resourceUrl': {return this.bypassSecurityTrustResourceUrl(value)}
            default: return this.bypassSecurityTrustHtml(value)
        }
    }
    bypassSecurityTrustHtml(value:string){ return this.sanitizer.bypassSecurityTrustHtml(value)}
    bypassSecurityTrustScript(value:string){return this.sanitizer.bypassSecurityTrustScript(value)}
    bypassSecurityTrustStyle(value:string){return this.sanitizer.bypassSecurityTrustStyle(value)}
    bypassSecurityTrustUrl(value:string){return this.sanitizer.bypassSecurityTrustUrl(value)}
    bypassSecurityTrustResourceUrl(value:string){return this.sanitizer.bypassSecurityTrustResourceUrl(value)}

}