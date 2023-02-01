import { controller, httpGet } from 'inversify-express-utils';
import { roles } from './roles';

@controller('/role')
export class RoleController {
    @httpGet('/')
    public async index() {
        return roles;
    }
}
