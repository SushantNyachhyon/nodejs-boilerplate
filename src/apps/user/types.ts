import type { Document } from 'mongoose';

export type IUser = Document & {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    contact?: string
    address?: string;
    avatar?: string;
    role: string;
    isActive: boolean;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
};
