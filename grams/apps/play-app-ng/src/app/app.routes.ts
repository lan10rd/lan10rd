import { Routes } from '@angular/router'

// import { CommonNgDynamicFeatureModule } from '@grams/common/ng'

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('./landing/landing.feature.module')).AppLandingFeatureModule
    },
    {
        path: 'common',
        loadChildren: async () => (await import('../libs/common/common.feature.module')).CommonFeatureModule
    },
    {
        path: 'play',
        loadChildren: async () => (await import('../libs/play/play.feature.module')).PlayFeatureModule
    },
    {
        path: 'list',
        loadChildren: async () => (await import('../libs/list/list.feature.module')).ListFeatureModule
    },
    {
        path: '**',
        redirectTo: ''
    }
]