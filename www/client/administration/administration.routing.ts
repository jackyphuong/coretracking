import { Routes, RouterModule } from '@angular/router';

import { SettingComponent } from './setting.component';
import { OrganizationUnitsComponent } from './organizationunits.component';
import { RolesComponent } from './roles.component';
import { AuditLogComponent } from './auditlog.component';
import { UsersComponent } from './user.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Administration'
        },
        children: [
            {
                path: 'setting',
                component: SettingComponent,
                data: {
                    title: 'Setting'
                }
            },
            {
                path: 'organizationunits',
                component: OrganizationUnitsComponent,
                data: {
                    title: 'Organization Units'
                }
            },
            {
                path: 'roles',
                component: RolesComponent,
                data: {
                    title: 'Roles'
                }
            },
            {
                path: 'users',
                component: UsersComponent,
                data: {
                    title: 'Users'
                }
            },
            {
                path: 'auditlogs',
                component: AuditLogComponent,
                data: {
                    title: 'Audit Logs'
                }
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
