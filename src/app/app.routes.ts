import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./features/home/home-routing').then(m => m.homeRoutes), canActivate: [] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
