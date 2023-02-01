import { IUser } from '../user/types';
import type { IToken } from './types';

export interface IAuthService {
    authenticate(email: string, password: string): Promise<IUser>;
    createToken(payload: string): Promise<string>;
    login(email: string, password: string): Promise<IToken>;
    me(_id: string): Promise<IUser>;
}
