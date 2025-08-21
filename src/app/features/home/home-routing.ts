import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/home-layout/home-layout').then(m => m.HomeLayout),
        children: [
            { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'dashboard' }
        ]
    }
];
