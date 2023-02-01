import type { Container } from 'inversify';
import type { Request, Response, NextFunction } from 'express';

import { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { Application } from '@/core/abstracts';

import { Server } from '@/core/server';
import { Database } from '@/core/database';
import { HTTPException } from '@/core/exception';

import { AppProvider } from '@/providers/app.provider';

import '@/apps/controllers';

export class App extends Application {
    public async configure(container: Container) {
        container.load(new AppProvider());
    }

    public async setup() {
        console.clear();

        const db = new Database();
        await db.connect();

        const server = new Server(this._container);

        server.configure(app => {
            app.use(json())
                .use(cors())
                .use(urlencoded({ extended: true }))
                .use(morgan('combined'));
        });

        server.exceptionHandler(app => {
            app.use((err: HTTPException, _req: Request, res: Response, next: NextFunction) => {
                res.status(err.status).json({
                    error: {
                        type: err.type,
                        msg: err.message
                    }
                });
                next();
            });

            app.use('*', (_req: Request, res: Response, next: NextFunction) => {
                res.status(404).json({
                    error: {
                        type: 'err.notfound',
                        msg: 'route not found'
                    }
                });
                next();
            });
        });

        await server.listen();
    }
}
