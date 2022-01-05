import { Routes } from '@angular/router'

// import { CommonNgDynamicFeatureModule } from '@grams/common/ng'

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('./landing/landing.feature.module')).AppLandingFeatureModule
    },
    // {
    //     path: 'readme',
    //     loadChildren: async () => (await import('../libs/readme/readme.feature.module')).ReadmeFeatureModule
    // },
    // {
    //     path: 'notes',
    //     loadChildren: async () => (await import('../libs/notes/notes.feature.module')).NotesFeatureModule
    // },
    // {
    //     path: 'showcase',
    //     loadChildren: async () => (await import('../libs/showcase/showcase.feature.module')).ShowcaseFeatureModule
    // },
    // {
    //     path: 'play',
    //     loadChildren: async () => (await import('../libs/play/play.feature.module')).PlayFeatureModule
    // },
    {
        path: '**',
        redirectTo: ''
    }
]