import { HTTPException } from './http.exception';

export class Unauthorized extends HTTPException {
    constructor(
        msg = 'you are not authenticated',
        type = 'err.unauthorized',
        status = 401
    ) {
        super(msg, type, status);
    }
}
