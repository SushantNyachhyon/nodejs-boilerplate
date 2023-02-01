import { HTTPException } from './http.exception';

export class NotFound extends HTTPException {
    constructor(
        msg = 'resource not found',
        type = 'err.notfound',
        status = 404
    ) {
        super(msg, type, status);
    }
}
