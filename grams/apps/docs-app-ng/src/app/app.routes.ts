import { Routes } from '@angular/router'

// import { CommonNgDynamicFeatureModule } from '@grams/common/ng'

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('./landing/landing.feature.module')).AppLandingFeatureModule
    },
    {
        path: 'readme',
        loadChildren: async () => (await import('../libs/readme/readme.feature.module')).ReadmeFeatureModule
    },
    {
        path: 'notes',
        loadChildren: async () => (await import('../libs/notes/notes.feature.module')).NotesFeatureModule
    },
    {
        path: '**',
        redirectTo: ''
    }
]