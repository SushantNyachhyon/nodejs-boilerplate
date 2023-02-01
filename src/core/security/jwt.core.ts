import type { JwtPayload } from 'jsonwebtoken';
import { sign, verify } from 'jsonwebtoken';

import { config } from '@/config';

export class JWT {
    public static async create(payload: string): Promise<string> {
        return sign({ _id: payload }, config.jwt.secret, {
            expiresIn: `${config.jwt.expiry}h`,
        });
    }

    public static async decode(payload: string): Promise<string | JwtPayload> {
        return verify(payload, config.jwt.secret);
    }
}
