export const db = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT as string) || 27017,
    name: process.env.DB_NAME || 'default',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    authSource: process.env.AUTH_SOURCE || 'admin'
};
