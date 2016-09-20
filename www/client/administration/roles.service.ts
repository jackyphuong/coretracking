import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Role } from '../models/role';
import { ROLES } from '../mockdata/role.mock';

@Injectable()
export class RoleService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private rolesUrl = 'app/roles';  // URL to web api

  constructor(private http: Http) { }

  roles: Role[];

  // Service Methods

  //add role
  create(name: string): Promise<Role> {
    return this.http
      .post(this.rolesUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  //update role
  update(role: Role): Promise<Role> {
    const url = `${this.rolesUrl}/${role.id}`;
    return this.http
      .put(url, JSON.stringify(role), { headers: this.headers })
      .toPromise()
      .then(() => role)
      .catch(this.handleError);
  }

  //delete Role
  delete(id: number): Promise<void> {
  let url = `${this.rolesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

  //Get role list
  getRoles(): Promise<Role[]> {
    return this.http.get(this.rolesUrl)
      .toPromise()
      .then(response => response.json().data as Role[])
      .catch(this.handleError);
  }

  //get role list slowly simulator
  getRolesSlowly(): Promise<Role[]> {

    return new Promise<Role[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getRoles());
  }

  // Private Methods
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
