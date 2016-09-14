import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: 'client/dashboard/dashboard.module'
    },
    {
        path: 'admin',
        loadChildren: 'client/administration/administration.module'
    }
];

export const routing = RouterModule.forRoot(routes);