import { inject, injectable } from 'inversify';

import type { IUserRepository } from '@/apps/user/interfaces';
import type { IAuthService } from './interfaces';
import type { IToken } from './types';

import { JWT, Hash } from '@/core/security';
import { Unprocessable } from '@/core/exception';

import { TYPES } from '@/providers/types';

import { IUser } from '@/apps/user/types';

@injectable()
export class AuthService implements IAuthService {
    constructor(
        @inject(TYPES.UserRepository) private readonly _user: IUserRepository
    ) { }

    async authenticate(email: string, password: string): Promise<IUser> {
        const user = await this._user.findByEmail(email);

        if (!user) throw new Unprocessable('invalid credentials');
        if (!user.isActive) throw new Unprocessable('user is not active');

        const matchedUser = await Hash.verify(password, user.password);
        if (matchedUser) return user;

        throw new Unprocessable('invalid credentials');
    }

    async createToken(payload: string): Promise<string> {
        return await JWT.create(payload);
    }

    async login(email: string, password: string): Promise<IToken> {
        const user = await this.authenticate(email, password);
        return { accessType: 'Bearer', accessToken: await this.createToken(user._id) };
    }

    async me(_id: string): Promise<IUser> {
        return await this._user.findById(_id);
    }
}
