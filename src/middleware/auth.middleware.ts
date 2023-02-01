import { Request, Response, NextFunction } from 'express';

import type { IRequest } from '@/core/interfaces';

import { Unauthorized } from '@/core/exception';
import { JWT } from '@/core/security';

export async function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) throw new Unauthorized();
        const decoded = await JWT.decode(token) as { _id: string };
        (req as IRequest).auth = decoded._id;
        next();
    } catch (e) {
        return res.status(422).json({
            error: {
                type: 'expired',
                msg: 'jwt expired'
            }
        });
    }
}
