import { NgModule } from '@angular/core';

import { routing } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        routing,
    ],
    declarations: [
        DashboardComponent,
    ]
})
export default class DashboardModule { }