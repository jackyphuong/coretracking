import { Role } from '../models/role';

export const ROLES: Role[] = [
  {id: 1, name: 'Administration', createdDate: new Date().toLocaleDateString()},
  {id: 2, name: 'User', createdDate: new Date().toLocaleDateString()},
  {id: 3, name: 'Moderation', createdDate: new Date().toLocaleDateString()}
];
