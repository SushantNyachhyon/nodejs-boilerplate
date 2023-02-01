import type { IUser } from './types';

export interface IUserRepository {
    findById(_id: string): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
}
