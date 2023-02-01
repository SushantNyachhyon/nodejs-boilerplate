import type { IRole } from './types';

export const roles: IRole[] = [
    {
        name: 'Super Admin',
        identifier: 'super-admin',
        description: 'Access and manage every thing in the system'
    },
    {
        name: 'Admin',
        identifier: 'admin',
        description: 'Access everything with certain privileges in the system'
    },
    {
        name: 'User',
        identifier: 'user',
        description: 'User in the system'
    }
];
