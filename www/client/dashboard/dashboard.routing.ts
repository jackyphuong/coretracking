import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard'
        },
        component: DashboardComponent,
    }
];

export const routing = RouterModule.forChild(routes);
