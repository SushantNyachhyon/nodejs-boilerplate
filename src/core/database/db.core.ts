import { set, connect } from 'mongoose';

import { config } from '@/config';


export class Database {
    public async connect() {
        set('strictQuery', false);
        return await connect(`mongodb://${config.db.host}:${config.db.port}`, {
            user: config.db.user,
            pass: config.db.password,
            dbName: config.db.name,
            authSource: config.db.authSource
        });
    }
}
