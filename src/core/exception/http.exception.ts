export class HTTPException extends Error {
    constructor(
        msg: string,
        public readonly type: string,
        public readonly status: number
    ) {
        super(msg);
    }
}
