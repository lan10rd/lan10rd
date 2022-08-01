import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('./landing/landing.feature.module')).AppLandingFeatureModule
    },
    {
        path: 'play',
        loadChildren: async () => (await import('../libs/play/play.feature.module')).PlayFeatureModule
    },
    {
        path: 'testing',
        loadChildren: async () => (await import('../libs/testing/testing.feature.module')).TestingFeatureModule
    },
    {
        path: 'testing-redirect',
        redirectTo: 'testing'
    },
    {
        path: '**',
        redirectTo: ''
    }
]