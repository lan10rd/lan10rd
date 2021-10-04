import { Injectable } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgSanitizerService
{

    constructor(private sanitizer: DomSanitizer) {}

    bypassSecurityTrustHtml(value:string){ return this.sanitizer.bypassSecurityTrustHtml(value)}
    bypassSecurityTrustScript(value:string){return this.sanitizer.bypassSecurityTrustScript(value)}
    bypassSecurityTrustStyle(value:string){return this.sanitizer.bypassSecurityTrustStyle(value)}
    bypassSecurityTrustUrl(value:string){return this.sanitizer.bypassSecurityTrustUrl(value)}
    bypassSecurityTrustResourceUrl(value:string){return this.sanitizer.bypassSecurityTrustUrl(value)}

}