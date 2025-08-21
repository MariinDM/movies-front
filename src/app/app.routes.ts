import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./features/home/layout/home-layout/home-layout').then(m => m.HomeLayout) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
