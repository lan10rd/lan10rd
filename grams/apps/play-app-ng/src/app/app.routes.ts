import { Routes } from '@angular/router'

import { CommonNgDynamicFeatureModule } from '@lanl0rd/common/ng'

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
        path: '**',
        redirectTo: ''
    }
]