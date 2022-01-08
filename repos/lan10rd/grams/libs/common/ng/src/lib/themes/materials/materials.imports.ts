export let materials: any = {
    css: {
        // shiny: {
        //     component: async () => (await import('./css/shiny/shiny.element')).CommonThemesMaterialsCssShinyElement,
        //     module: async () => (await import('./css/shiny/shiny.element.module')).CommonThemesMaterialsCssShinyElementModule,
        //     data: {},
        //     imported: false,
        //     enabled: false
        // },
        particles: {
            component: async () => (await import('./css/particles/particles.element')).CommonThemesMaterialsCssParticlesElement,
            module: async () => (await import('./css/particles/particles.element.module')).CommonThemesMaterialsCssParticlesElementModule,
            data: {},
            imported: false,
            enabled: false
        },
        stars: {
            component: async () => (await import('./css/stars/stars.element')).CommonThemesMaterialsCssStarsElement,
            module: async () => (await import('./css/stars/stars.element.module')).CommonThemesMaterialsCssStarsElementModule,
            data: {},
            imported: false,
            enabled: false
        },
        // haze: {
        //     component: async () => (await import('./css/haze/haze.element')).CommonThemesMaterialsCssHazeElement,
        //     module: async () => (await import('./css/haze/haze.element.module')).CommonThemesMaterialsCssHazeElementModule,
        //     data: {},
        //     imported: false,
        //     enabled: false
        // },
        // galaxy: {
        //     component: async () => (await import('./css/galaxy/galaxy.element')).CommonThemesMaterialsCssGalaxyElement,
        //     module: async () => (await import('./css/galaxy/galaxy.element.module')).CommonThemesMaterialsCssGalaxyElementModule,
        //     data: {},
        //     imported: false,
        //     enabled: false
        // }
    },
    webgl: {
        'three-cubes': {
            component: async () => (await import('./webgl/three-cubes/three-cubes.element')).CommonThemesMaterialsWebglThreeCubesElement,
            module: async () => (await import('./webgl/three-cubes/three-cubes.element.module')).CommonThemesMaterialsWebglThreeCubesElementModule,
            data: {},
            imported: false,
            enabled: false
        },
        nebula: {
            component: async () => (await import('./webgl/nebula/nebula.element')).CommonThemesMaterialsWebglNebulaElement,
            module: async () => (await import('./webgl/nebula/nebula.element.module')).CommonThemesMaterialsWebglNebulaElementModule,
            data: {},
            imported: false,
            enabled: false
        },
        bubbles: {
            component: async () => (await import('./webgl/bubbles/bubbles.element')).CommonThemesMaterialsWebglBubblesElement,
            module: async () => (await import('./webgl/bubbles/bubbles.element.module')).CommonThemesMaterialsWebglBubblesElementModule,
            data: {},
            imported: false,
            enabled: false
        }
    },
    canvas: {
        fireflies: {
            component: async () => (await import('./canvas/fireflies/fireflies.element')).CommonThemesMaterialsCanvasFirefliesElement,
            module: async () => (await import('./canvas/fireflies/fireflies.element.module')).CommonThemesMaterialsCanvasFirefliesElementModule,
            data: {},
            imported: false,
            enabled: false
        },
        starfield: {
            component: async () => (await import('./canvas/starfield/starfield.element')).CommonThemesMaterialsCanvasStarfieldElement,
            module: async () => (await import('./canvas/starfield/starfield.element.module')).CommonThemesMaterialsCanvasStarfieldElementModule,
            data: {},
            imported: false,
            enabled: false
        }
    }

}