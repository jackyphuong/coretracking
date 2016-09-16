import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import {AgGridModule} from 'ag-grid-ng2/main';

import { routing } from './administration.routing';
import { SettingComponent } from './setting.component';
import { OrganizationUnitsComponent } from './organizationunits.component';
import { RolesComponent } from './roles.component';
import { AuditLogComponent } from './auditlog.component';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    Ng2BootstrapModule,
    AgGridModule.forRoot(),
  ],
  declarations: [    
    SettingComponent,
    OrganizationUnitsComponent,
    RolesComponent,
    AuditLogComponent,
    UsersComponent
  ]
})
export default class AdministrationModule {}
