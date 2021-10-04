import { Injectable, ApplicationRef, ElementRef, Inject, Optional } from '@angular/core'

import { CommonNgStylesService } from '../styles/styles.service'
import { CommonNgDocumentService } from '../document/document.service'
import { CommonNgHttpService } from '../http/http.service'
import { CommonNgStorageService } from '../storage/storage.service'
import { CommonNgJsonService } from '../json/json.service'

// import { materials } from './materials/materials.imports'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgThemesService
{

    materials: any = []

    themes: any = []
    theme: any

    globalDefaultStyles: any

    constructor
    (
        public css: CommonNgStylesService,
        public document: CommonNgDocumentService,
        public app: ApplicationRef,
        public http: CommonNgHttpService,
        public storage: CommonNgStorageService,
        public json: CommonNgJsonService,
        @Inject('COMMON_THEMES_REAL_OPTIONS') @Optional() public options: any
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
        this.initialize()
    }

    initialize
    (
    )
    {
        if (!this.options)
            this.options = { global: 'default' }
        let loaded = this.getTheme()
        if (loaded) this.addThemes([loaded])
        if (this.options.global === 'default')
        {
            this.addThemes([this.defaultTheme()])
            this.globalDefaultStyles = this.defaultGlobalStyles()
        }
        this.setTheme(this.themes[0])
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
    addAppClasses ( classes: string[] ) { this.css.addClasses(this.app?.components[0]?.injector.get(ElementRef).nativeElement, classes) }
    addBodyClasses ( classes: string[] ) { this.css.addClasses(this.css.document.document.body, classes) }
    applyAppStyles ( styles: any ) { this.css.applyStyles(this.app?.components[0]?.injector.get(ElementRef).nativeElement, styles)}
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
        }
    )
    {
        let theme = this.getTheme()
        if (mod?._id) theme._id = mod._id
        if (mod?.theme) theme.theme = mod.theme
        if (mod?.author) theme.author = mod.author
        if (mod?.addClasses)
        {
            for (let element of Object.keys(mod.addClasses))
            {
                let themeAddClasses = theme.addClasses[element] ? theme.addClasses[element] : {}
                theme.addClasses[element] = { ...themeAddClasses, ...mod.addClasses[element] }
            }
        }
        if (mod?.addStyles)
        {
            for (let element of Object.keys(mod.addStyles))
            {
                let themeAddStyles = theme.addStyles[element] ? theme.addStyles[element] : {}
                theme.addStyles[element] = { ...themeAddStyles, ...mod.addStyles[element] }
            }
        }
        if (mod?.materials)
        {
            
        }
        this.setTheme(theme)
    }

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
        if ('classes' in theme && 'body' in theme.classes)
        {
            
        }
        if ('addClasses' in theme && 'body' in theme.addClasses)
            this.addBodyClasses(theme.addClasses.body)
            
        if ('classes' in theme && 'app' in theme.classes)
        {

            
        }
        if ('addClasses' in theme && 'app' in theme.addClasses)
            this.addAppClasses(theme.addClasses.app)
        
        if ('styles' in theme && 'app' in theme.styles)
        {

            
        }
        if ('addStyles' in theme && 'app' in theme.addStyles)
            this.applyAppStyles(theme.addStyles.app)

        if ('styles' in theme && 'body' in theme.styles)
        {

        }
        if ('addStyles' in theme && 'body' in theme.addStyles)
            this.applyBodyStyles(theme.addStyles.body)
        
        let globally = 'global' in theme ? theme.global : this.globalDefaultStyles
        if ('addGlobal' in theme) globally += '\n' + theme.addGlobal
        this.css.resetGlobal(globally, 'GlobalAppStyles')

        if ('materials' in theme)
        {
            for (let renderer of Object.keys(this.materials))
                for (let material of Object.keys(this.materials[renderer]))
                    this.disable(material, renderer)
            for (let renderer of Object.keys(theme.materials))
                for (let material of Object.keys(theme.materials[renderer]))
                    this.enable(material, renderer, theme.materials[renderer][material])
        }

        this.storage.setLocal('theme', theme)
        this.theme = theme
    }

    addThemes
    (
        themes: any[]
    )
    {
        this.themes = this.json.mergeArrays(this.themes, themes)
        this.json.removeDuplicateObjects(this.themes, true)
    }

    defaultTheme
    (
    )
    {
        return {
            "_id": 0,
            "theme": "default",
            "author": "app",
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
            }
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

        .hidden {
            display: none;
            visibility: hidden;
        }

        .flex { display: flex; }
        .jcc { justify-content: center; }

        pre {
            overflow-wrap: break-word;
            white-space: pre-wrap;
            // white-space: pre-line;
            margin: 0;
        }

        input {
            background-color: rgba(0, 0,0,0);
            border-radius: 5px;
            backdrop-filter: blur(5px);
            font-family: trebuchet ms;
            font-size: 24px;
            color: white;
            width: 100%;
        }

        input:focus {
            background-color: rgba(255, 255, 255, 1);
            color: purple;
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
            background-color: purple;
        }
        .glo-0-shadow {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1));
        }
        .glo-0-drop {
            backdrop-filter: blur(5px);
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0);
        }
        .glo-1-drop {
            backdrop-filter: blur(2.5px);
            border: solid white 1px;
            border-radius: 5px;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255);
            -moz-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255);
            box-shadow: 0px 0px 5px 0px rgba(255, 255, 255);
        }
        .glo-0-text-ani {
            transition: all .2s ease-in-out;
        }
        .glo-0-text-ani:hover {
            transform: scale(1.33);
        }
        .glo-0-text-ani:focus-within {
            transform: scale(1.33);
        }
        .glo-0-text-trim {
            text-shadow: 0px 0px 1px rgb(0 0 0);
        }
        .glo-1-text-trim {
            text-shadow: 0px 0px 1px rgb(255 255 255);
        }
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