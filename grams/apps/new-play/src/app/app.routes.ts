import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('../libs/landing/landing.feature.module')).AppLandingFeatureModule
    },
    {
        path: '**',
        redirectTo: ''
    }
]