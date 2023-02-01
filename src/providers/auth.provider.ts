import type { Request, Response, NextFunction } from 'express';

import { injectable, inject } from 'inversify';
import { interfaces } from 'inversify-express-utils';

import { JWT } from '@/core/security';
import { cache } from '@/core/cache';

import { IUserRepository } from '@/apps/user/interfaces';

import { TYPES } from './types';
import { IUser } from '@/apps/user/types';

class Principal implements interfaces.Principal {
    public details: IUser | null;

    public constructor(user: IUser | null) {
        this.details = user;
    }

    public isAuthenticated(): Promise<boolean> {
        return Promise.resolve(this.details !== null);
    }

    public isResourceOwner(resourceId: string): Promise<boolean> {
        return Promise.resolve(this.details?._id === resourceId);
    }

    public isInRole(role: string): Promise<boolean> {
        return Promise.resolve(this.details?.role === role);
    }
}

@injectable()
export class AuthProvider implements interfaces.AuthProvider {
    @inject(TYPES.UserRepository) private readonly _user!: IUserRepository;

    public async getUser(
        req: Request,
        _: Response,
        next: NextFunction
    ): Promise<interfaces.Principal> {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) return new Principal(null);


        const decoded = await JWT
            .decode(token)
            .catch(() => next()) as { _id: string };

        if (!decoded) return new Principal(null);

        const { _id } = decoded;
        let user: IUser;

        if (cache.has(_id)) {
            user = cache.get(_id) as IUser;
        } else {
            user = await this._user.findById(_id);
            cache.set(_id, user);
        }

        return new Principal(user);
    }

}
