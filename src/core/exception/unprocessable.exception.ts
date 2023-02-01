import { HTTPException } from './http.exception';

export class Unprocessable extends HTTPException {
    constructor(
        msg = 'cannot process the request',
        type = 'err.unprocessable',
        status = 422
    ) {
        super(msg, type, status);
    }
}
