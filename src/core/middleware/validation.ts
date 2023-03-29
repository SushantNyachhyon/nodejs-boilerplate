import type { Request, Response, NextFunction } from 'express';
import type { AnyZodObject, ZodError } from 'zod';

import type { Errors } from '@/core/interfaces';


export class Validate {
    public static with(schema: AnyZodObject) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse(req.body);
                next();
            } catch (e) {
                const err = e as ZodError;
                const errors: Errors = {};
                for (const issue of err.issues) {
                    errors[issue.path[0]] = {
                        type: issue.code,
                        msg: issue.message
                    };
                }
                return res.status(400).json({ errors });
            }
        };
    }
}
