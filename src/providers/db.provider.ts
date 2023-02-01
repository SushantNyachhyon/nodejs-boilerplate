import { injectable } from 'inversify';

import { User } from '@/apps/user/models';

@injectable()
export class DBContext {
    get user() {
        return User;
    }
}
