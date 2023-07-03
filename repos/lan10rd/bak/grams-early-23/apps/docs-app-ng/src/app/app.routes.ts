import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('../libs/landing/landing.feature.module')).AppLandingFeatureModule
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
        path: 'showcase',
        loadChildren: async () => (await import('../libs/showcase/showcase.feature.module')).ShowcaseFeatureModule
    },
    {
        path: 'play',
        loadChildren: async () => (await import('../libs/play/play.feature.module')).PlayFeatureModule
    },
    {
        path: 'bearclaw',
        loadChildren: async () => (await import('../libs/bearclaw/bearclaw.feature.module')).BearclawFeatureModule
    },
    {
        path: 'shop',
        loadChildren: async () => (await import('../libs/shop/shop.feature.module')).ShopFeatureModule
    },
    {
        path: '**',
        redirectTo: ''
    }
]