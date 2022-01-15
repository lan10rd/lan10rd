import { Injectable, ApplicationRef, ElementRef, Inject, Optional } from '@angular/core'

import { CommonNgStylesService } from '../styles/styles.service'
import { CommonNgDocumentService } from '../document/document.service'
import { CommonNgHttpService } from '../http/http.service'
import { CommonNgStorageService } from '../storage/storage.service'
import { CommonNgJsonService } from '../json/json.service'
// import { BehaviorSubject } from 'rxjs'
// import { materials } from './materials/materials.imports'
// import sheet from './default.css' assert { type: 'css' };
import { CommonNgSanitizerService } from '../sanitizer/sanitizer.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgThemesService
{

    materials: any = []

    themes: any = {}
    // themes$: any = new BehaviorSubject({})
    theme: any
    theme_identifier: string = '_id'
    theme_key_index : number = -7

    // globalDefaultStyles: any

    constructor
    (
        public css: CommonNgStylesService,
        public document: CommonNgDocumentService,
        // public app: ApplicationRef,
        public http: CommonNgHttpService,
        public storage: CommonNgStorageService,
        public json: CommonNgJsonService,
        public sanitizer: CommonNgSanitizerService,
        // @Inject('COMMON_THEMES_REAL_OPTIONS') @Optional() public options: any
    )
    {
        // let app$: any = app.isStable
        // app$ = app$.subscribe((stable: boolean) => {
        //     if (stable)
        //     {
        //         console.log('stable finally')
        //         this.initialize()
        //         app$.unsubscribe()
        //     }
        // })

        /* get app wide options if any */
        // if (!this.options)
        //     this.options = { global: 'default' }

        this.initialize()
    }

    async initialize
    (
    )
    {
        let stored = this.getStored()
        if (!stored)
        {
            let default_theme: any = this.defaultTheme()
            let default_stored = {
                theme_identifier: this.theme_identifier,
                theme: default_theme[this.theme_identifier],
                themes: {[default_theme[this.theme_identifier]]: default_theme}
            }
            stored = this.setStored(default_stored)
        }
        this.setThemes(stored.themes)
        this.setTheme(this.themes[stored.theme])

        // let themes = this.getLocalThemes()
        // if (!themes)
        // {
        //     this.modifyThemes([this.defaultTheme()])
        //     this.setLocalThemes()
        // }
        // this.themes = themes

        // let theme = this.getLocalTheme()
        // if (!theme || !(theme['_id'] in this.themes))
        // {
        //     theme = this.themes[Object.keys(this.themes)[0]]
        //     this.setLocalTheme(theme)
        // }
        // this.setTheme(theme)
        // this.theme = theme
    }

    /* materials */
    async enable
    (
        materialName: string,
        renderer: 'css' | 'canvas' | 'webgl' | string,
        data?: any
    )
    {
        if (materialName in this.materials[renderer])
        {
            if (!this.materials[renderer][materialName].imported)
            {
                this.materials[renderer][materialName].module = await this.materials[renderer][materialName].module()
                this.materials[renderer][materialName].component = await this.materials[renderer][materialName].component()
                this.materials[renderer][materialName].imported = true
            }
            this.materials[renderer][materialName].enabled = true
        }
    }

    disable ( materialName: string, renderer: 'css' | 'canvas' | 'webgl' | string ) { if (materialName in this.materials[renderer]) this.materials[renderer][materialName].enabled = false }
    getData ( material: string, renderer: 'css' | 'canvas' | 'webgl' | string ) { return this.materials[renderer][material].data }
    setData ( material: string, renderer: 'css' | 'canvas' | 'webgl' | string, data: any ) { this.materials[renderer][material].data = data }
    updateData ( material: string,  renderer: 'css' | 'canvas' | 'webgl' | string, data: any
    ) { if (material in this.materials[renderer]) this.setData(material, renderer, {...this.getData(material, renderer), ...data}) }

    /* themes */
    /* helpers */
    addAppClasses ( classes: string[] ) { 
        // this.css.addClasses(this.app?.components[0]?.injector.get(ElementRef).nativeElement, classes) 
    }
    addBodyClasses ( classes: string[] ) { this.css.addClasses(this.css.document.document.body, classes) }
    applyAppStyles ( styles: any ) {
        // this.css.applyStyles(this.app?.components[0]?.injector.get(ElementRef).nativeElement, styles)
    }
    applyBodyStyles ( styles: any ) { this.css.applyStyles(this.document.document.body, styles) }

    modifyTheme
    (
        mod?: {
            "_id"?: number,
            "theme"?: string,
            "author"?: string,
            "addClasses"?: any,
            "addStyles"?: any,
            "materials"?: any
        } | any
    )
    {
        let theme = {...this.theme, ...mod}
        this.setTheme(theme)
    }


    stored_key: string = 'CommonThemesService'
    getStored(){
        return this.storage.getLocal(this.stored_key)
    }
    setStored(stored: {theme: string, themes: any, theme_identifier?: string}){
        if (!stored.theme_identifier)
            stored.theme_identifier = this.theme_identifier
        return this.storage.setLocal(this.stored_key, stored)
    }

    // setLocalThemes(themes?: any) {
    //     if (!themes)
    //         themes = this.themes
    //     this.storage.setLocal('CommonThemesService.themes', themes)
    // }
    // setLocalTheme(theme?: any) {
    //     this.storage.setLocal('CommonThemesService.theme', theme ? theme : this.theme)
    // }
    // getLocalThemes() {
    //     return this.storage.getLocal('CommonThemesService.themes')
    // }
    // getLocalTheme() {
    //     return this.storage.getLocal('CommonThemesService.theme')
    // }

    getTheme
    (
    )
    {
        let stored = this.storage.getLocal('theme')
        return stored ? stored : this.theme
    }

    async setTheme
    (
        theme: any
    )
    {
        let current = this.json.copy(this.theme)
        if (!theme)
            theme = this.defaultTheme()

        /* classes */
        if (current?.classes?.app)
        {

        }
        if (theme?.classes?.app)
        {

        }
        if (current?.classes?.body)
        {
            
        }
        if (theme?.classes?.body)
        {
            
        }

        /* add body */
        if (current?.addClasses?.body)
            this.css.removeClasses(this.css.document.document.body, current.addClasses.body)
        if (theme?.addClasses?.body)
            this.css.addClasses(this.css.document.document.body, theme.addClasses.body)

        /* add app */
        if (current?.addClasses?.app)
        {
            // this.css.removeClasses(this.app?.components[0]?.injector.get(ElementRef).nativeElement, current.addClasses.app)
        }
        if (theme?.addClasses?.app)
        {
            // this.css.addClasses(this.app?.components[0]?.injector.get(ElementRef).nativeElement, theme.addClasses.app)
        }

        /* styles */
        if (current?.styles?.app)
        {

        }
        if (theme?.styles?.app)
        {

        }

        if (current?.styles?.body)
        {

        }
        if (theme?.styles?.body)
        {

        }


        // if (current?.addStyles?.app)
        //     this.css.unApplyStyles(this.app?.components[0]?.injector.get(ElementRef).nativeElement, current.addStyles.app)
        // if (theme?.addStyles?.app)
        //     this.css.applyStyles(this.app?.components[0]?.injector.get(ElementRef).nativeElement, theme.addStyles.app)

        if (current?.addStyles?.body)
            this.css.unApplyStyles(this.document.document.body, current.addStyles.body)
        if (theme?.addStyles?.body)
            this.css.applyStyles(this.document.document.body, theme.addStyles.body)


        /* inner html's just take care of themselves in the theme element */

        /* supported materials */
        if (current?.materials)
        {
            for (let renderer of Object.keys(this.materials))
                for (let material of Object.keys(this.materials[renderer]))
                    this.disable(material, renderer)
        }
        if (theme?.materials)
        {
            for (let renderer of Object.keys(theme.materials))
                for (let material of Object.keys(theme.materials[renderer]))
                    this.enable(material, renderer, theme.materials[renderer][material])
        }

        /* stylesheets */
        if (current?.stylesheets)
        {
            for (let sheet_key of Object.keys(current.stylesheets))
            {
                let sheet = theme.stylesheets[sheet_key]
                if (sheet.startsWith('http'))
                {
                    /* add sheet with link and id as sheet_key */
                }
                else
                {
                    this.css.removeGlobal('ThemesService:' + sheet_key)
                }
            }
        }
        if (theme?.stylesheets)
        {
            for (let sheet_key of Object.keys(theme.stylesheets))
            {
                let sheet = theme.stylesheets[sheet_key]
                if (sheet.startsWith('http'))
                {
                    /* add sheet with link and id as sheet_key */
                }
                else if (sheet.length === 0)
                {
                    this.css.addGlobal(this.defaultGlobalStyles(), 'ThemesService:' + sheet_key)
                }
                else
                {
                    this.css.addGlobal(sheet, 'ThemesService:' + sheet_key)
                }
            }
        }
        
        // let globally = 'global' in theme ? theme.global : this.globalDefaultStyles
        // if ('addGlobal' in theme) globally += '\n' + theme.addGlobal
        // this.css.resetGlobal(globally, 'GlobalAppStyles')
        
        this.theme = theme
        this.theme_key_index = Object.values(this.themes).findIndex((theme: any) => { return theme[this.theme_identifier] === this.theme[this.theme_identifier] })

        // console.log('done setting theme', this.theme)

        /* possibly need reflow, damn safari sometimes doesnt apply the classes' styles for some reason */
        /*
        sel.style.display='none';
        sel.offsetHeight; // no need to store this anywhere, the reference is enough
        sel.style.display='';
        */
    }

    setThemes
    (
        themes: any,
        identifier: string = this.theme_identifier
    )
    {
        let new_themes: any = {}
        for (let theme of (Object.values(themes) as any))
        {
            let key = theme[identifier]
            new_themes[key] = theme
        }
        this.themes = new_themes
        // this.themes$.next(new_themes)
    }

    defaultTheme
    (
    )
    {
        return {
            "_id": '777',
            "theme": "default",
            "author": "grams",
            "addClasses": {
                "body": ["parallax", "glo-0-text", "glo-0-back", "p"],
                "app": []
            },
            "addStyles": {
                "body": {},
                "app": {}
            },
            "materials": {
                "css": {},
                "canvas": {},
                "webgl": {}
            },
            "stylesheets": {
                "default": ""
            },
            "iframes": [],
            "frames": [],
            "safeHTML": "",
            "unsafeHTML": ""
        }
    }

    defaultGlobalStyles
    (
    )
    {
        return `
html, body {
    min-height: 100%;
    max-width: 100%;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    cursor: default;
    word-wrap: break-word;
}
audio { max-width: 100%; }

html { box-sizing: border-box; }
*, *:before, *:after { box-sizing: inherit; }

.parallax {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    background-repeat: 'no-repeat';
}

.p { padding: 1rem; }
.m { margin: 1rem }
.bl { display: block; }
.ib { display: inline-block; }
.mt { margin-top: 1rem; }
.ml { margin-left: 1rem; }
.mr { margin-right: 1rem; }
.mb { margin-bottom: 1rem; }
.pt { padding-top: 1rem; }
.pl { padding-left: 1rem; }
.pr { padding-right: 1rem; }
.pb { padding-bottom: 1rem; }
.ib { display: inline-block; }
.bottom { margin-bottom: 2rem }
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.33); }
.scrollable {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
.scrollable-y {
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: auto;
}
.tcenter { text-align: center; }
.tleft { text-align: left; }
.tright { text-align: right; }
.italic { font-style: italic; }
.fixed-top {
    position: fixed;
    top: 0px;
    z-index: 2;
    transition-property: top;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: 0s;
    left: 0;
    right: 0;
}
.corners { border-radius: 10px; }
.corners0 { border-radius: 0;}

.point:hover { cursor: pointer; }
.fit {width: fit-content}

.hidden {
    display: none;
    visibility: hidden;
}

.sticky { position: sticky; position: -webkit-sticky; }
.flex { display: flex; }
.column { flex-direction: column;}
.jcc { justify-content: center; }
.max-height-100vh {max-height: 100vh;}
.pre-line {white-space: pre-line;}

pre {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    /* white-space: pre-line; */
    margin: 0;
}

input {
    background-color: rgba(0, 0,0,0);
    border-radius: 5px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    font-family: trebuchet ms;
    font-size: 16px;
    color: white;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
    /* width: 100%; */
}
input::placeholder {
    text-shadow: none;
}
input:focus {
    /* text-shadow: 0px 0px 3px rgba(0, 0, 0, 1); */
    /* background-color: rgba(255, 255, 255, 1); */
    /* color: purple; */
}
input[type="color"],
input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="text"],
input[type="time"],
input[type="url"],
input[type="week"],
select:focus,
textarea {
    font-size: 16px;
}

.auto { margin: auto; }
.bold { font-weight: bold; }

.trunc {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.glo-0-text {
    color: rgba(255, 255, 255, 1);
    font-family: trebuchet ms;
}
.glo-0-back {
    background-color: rgba(0, 0, 0, 1);
}
.glo-0-shadow {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1)) drop-shadow(0 0 5px rgba(255, 255, 255, 1));
}
.glo-0-drop {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
}
.glo-1-drop {
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border: solid white 1px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255);
    -moz-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255);
}

.glo-0-text-ani:hover {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1));
}

/*
.glo-0-text-ani {
    transition: all .2s ease-in-out;
}
*/
/*
.glo-0-text-ani:focus-within {
    transform: scale(1.33);
}
*/
/*
.glo-0-text-trim {
    text-shadow: 0px 0px 1px rgb(0 0 0);
}
.glo-1-text-trim {
    text-shadow: 0px 0px 1px rgb(255 255 255);
} */

.glo-0-text-trim {
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 1));
    /* at some point should probably transition to text-shadow, but would like it to cover images as well?, text-shadow: 0px 0px 5px #FF0000; */
}
.flex1 { flex: 1 }
.z1 { z-index: 1; }
.z2 { z-index: 2; }
.z3 { z-index: 3; }
.zm1 { z-index: -1; }
.zm2 { z-index: -2; }
.zm3 { z-index: -3; }
.top0 { top: 0; }
.contain { overscroll-behavior: contain; }

/* these are all attempts to hide scrollbars on non apple browsers, it really looks not elegant, this really seems to work! overflow hidden has a lot of unintended consequences but pure scrollbar attacks seem to work okay */
/*
.auto-hide-scroll:not(:focus):not(:hover) { overflow: hidden; }
*/
*:not(:focus):not(:hover) { scrollbar-width: none; }
*:not(:focus):not(:hover)::-webkit-scrollbar { width: 0px; height: 0px; }
*:focus{ outline: inherit !important; }

        `

        // for glo-0-drop, removed border, also idea for how to achieve effect in firefox, though with svg element, is there inline styles with svg background?
        // apparently there is, 
        // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='10' /%3E%3C/filter%3E%3C/svg%3E");
        /*
            
            // for firefox
            // <svg>
            // <filter id="blur">
            //     <feGaussianBlur stdDeviation="10" />
            // </filter>
            //</svg>
            // -webkit-box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
            // -moz-box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
        */
    }

}