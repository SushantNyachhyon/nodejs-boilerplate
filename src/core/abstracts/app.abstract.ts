import { interfaces, Container } from 'inversify';


export abstract class Application {
    protected readonly _container: Container;

    constructor(options?: interfaces.ContainerOptions) {
        this._container = new Container(options);
        this.configure(this._container);
        this.setup();
    }

    abstract configure(container: Container): Promise<void>;
    abstract setup(): Promise<void>;
}
