import { Injectable, PLATFORM_ID, Inject } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'


@Injectable
({
    providedIn: 'root'
})
export class CommonBrowserService
{

    isBrowser = false
    isServer = false
    browser: string
    macintosh = false
    iphone = false
    android = false
    touch: any = false
    ios = false
    platformBrowser
    platformServer

    constructor
    (
        @Inject(PLATFORM_ID) public platformId: any
    )
    {
        this.platformBrowser = isPlatformBrowser(this.platformId)
        this.platformServer = isPlatformServer(this.platformId)
        this.setBrowser()
        this.setDevices()
    }

    async setBrowser
    (
    )
    {
        if (this.browser === undefined)
        {
            if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
                this.browser = 'opera'
            else if(navigator.userAgent.indexOf("Chrome") != -1 )
                this.browser = 'chrome'
            else if(navigator.userAgent.indexOf("Safari") != -1)
            {
                // !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
                this.browser = 'safari'
            }
            else if(navigator.userAgent.indexOf("Firefox") != -1 )
                this.browser = 'firefox'
            else
                this.browser = 'ie'
        }
        return this.browser
    }

    async setDevices
    (
    )
    {
        this.ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        this.touch = ('ontouchstart' in window || navigator.msMaxTouchPoints) || false
        this.macintosh = navigator.userAgent.toLowerCase().includes('macintosh')
        this.iphone = navigator.userAgent.toLowerCase().includes('iphone')
        this.android = navigator.userAgent.toLowerCase().includes('android')
    }

}