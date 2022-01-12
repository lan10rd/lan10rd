import { Routes } from '@angular/router'

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
        path: '**',
        redirectTo: ''
    }
]