import { compare } from 'bcrypt';

export class Hash {
    public static async verify(plainText: string, hashedValue: string): Promise<boolean> {
        return await compare(plainText, hashedValue);
    }
}
