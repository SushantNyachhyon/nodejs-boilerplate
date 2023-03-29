import {
    InversifyExpressServer,
    ConfigFunction
} from 'inversify-express-utils';
import type { Container } from 'inversify';

import { config } from '@/config';
import { AuthProvider } from '@/providers/auth.provider';

export class Server {
    private readonly _server: InversifyExpressServer;

    constructor(container: Container) {
        this._server = new InversifyExpressServer(
            container,
            null,
            { rootPath: '/api/v1' },
            null,
            AuthProvider
        );
    }

    public configure(configs: ConfigFunction) {
        this._server.setConfig(configs);
    }

    public exceptionHandler(configs: ConfigFunction) {
        this._server.setErrorConfig(configs);
    }

    public async listen() {
        const app = this._server.build();

        app.listen(config.app.port, () => {
            console.log(`server running at port ${config.app.port}`);
        });
    }
}
