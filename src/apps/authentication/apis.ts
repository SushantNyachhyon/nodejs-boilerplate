import type { Response } from 'express';

import {
    controller,
    requestBody,
    response,
    principal,
    httpGet,
    httpPost
} from 'inversify-express-utils';
import { inject } from 'inversify';

import type { IPrincipal } from '@/core/interfaces';

import { Validate } from '@/core/middleware/validation';
import { auth } from '@/middleware';

import { TYPES } from '@/providers/types';
import { IAuthService } from './interfaces';

import { LoginRequest, ILoginRequest } from './requests';

@controller('/auth')
export class AuthAPI {
    constructor(
        @inject(TYPES.AuthService) private readonly _auth: IAuthService
    ) { }

    @httpPost('/login', Validate.with(LoginRequest))
    public async login(
        @requestBody() payload: ILoginRequest,
        @response() res: Response
    ) {
        const { email, password } = payload;
        const response = await this._auth.login(email, password);
        return res.json(response);
    }

    @httpGet('/me', auth)
    public async me(@response() res: Response, @principal() user: IPrincipal) {
        return res.json(user.details);
    }
}
