import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';

import { routing } from './administration.routing';
import { SettingComponent } from './setting.component';
import { OrganizationUnitsComponent } from './organizationunits.component';
import { RolesComponent } from './roles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    routing,
    Ng2BootstrapModule
  ],
  declarations: [
    SettingComponent,   
    OrganizationUnitsComponent, 
    RolesComponent
  ]
})
export default class AdministrationModule {}