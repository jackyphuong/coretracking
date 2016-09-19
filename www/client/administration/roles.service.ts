import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { ROLES } from '../mockdata/role.mock';


@Injectable()
export class RoleService {
  roles: Role[];

  getRoles(): Promise<Role[]> {
    return  Promise.resolve(ROLES);
  }
  getRolesSlowly(): Promise<Role[]>{

    return new Promise<Role[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getRoles());
  }
}
