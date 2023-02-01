export const jwt = {
    secret: process.env.JWT_SECRET || '',
    expiry: process.env.JWT_EXPIRY || 2
};
