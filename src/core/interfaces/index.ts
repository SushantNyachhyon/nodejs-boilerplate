import { IUser } from '@/apps/user/types';
import type { Request } from 'express';

export type IRequest = Request & {
    auth: string;
}

export type IPrincipal = {
    details: IUser
}
