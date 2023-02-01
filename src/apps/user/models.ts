import { Schema, model } from 'mongoose';

import type { IUser } from './types';

const UserSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: String,
    address: String,
    avatar: String,
    role: { type: String, default: 'user' },
    isActive: { type: Boolean, default: false },
    lastLogin: Date
}, { timestamps: true, versionKey: false });

export const User = model<IUser>('User', UserSchema);
