import { injectable, inject } from 'inversify';

import type { IUserRepository } from './interfaces';

import { NotFound } from '@/core/exception';

import { DBContext } from '@/providers/db.provider';
import { IUser } from './types';

@injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @inject(DBContext) private readonly _db: DBContext
    ) { }

    public async findById(_id: string): Promise<IUser> {
        const user = await this._db.user.findById(_id);
        if (!user) throw new NotFound('user not found');
        return user;
    }

    public async findByEmail(email: string): Promise<IUser | null> {
        return await this._db.user.findOne({ email });
    }
}
