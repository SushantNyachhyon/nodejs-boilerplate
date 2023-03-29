import { ContainerModule } from 'inversify';

import { IUserRepository } from '@/apps/user/interfaces';
import { UserRepository } from '@/apps/user/repositories';

import { IAuthService } from '@/apps/authentication/interfaces';
import { AuthService } from '@/apps/authentication/services';

import { DBContext } from './db.provider';

import { TYPES } from './types';

export class AppProvider extends ContainerModule {
    constructor() {
        super(bind => {
            bind<DBContext>(DBContext).toSelf().inSingletonScope();

            bind<IUserRepository>(TYPES.UserRepository)
                .to(UserRepository)
                .inSingletonScope();
            bind<IAuthService>(TYPES.AuthService)
                .to(AuthService)
                .inSingletonScope();
        });
    }
}
