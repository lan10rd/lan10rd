import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('../libs/landing/landing.feature.module')).AppLandingFeatureModule
    },
    {
        path: 'play',
        loadChildren: async () => (await import('../libs/play/play.feature.module')).AppPlayFeatureModule
    },
    {
        path: '**',
        redirectTo: ''
    }
]