import { z } from 'zod';

const EMAIL_MSG = 'provide a valid email address';

export const LoginRequest = z.object({
    email: z
        .string({ required_error: EMAIL_MSG })
        .email({ message: EMAIL_MSG }),
    password: z
        .string({ required_error: 'provide a valid password' })
});

export type ILoginRequest = z.infer<typeof LoginRequest>;
