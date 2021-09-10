"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const index_js_1 = require("./controller/clients/index.js");
class Routes {
    constructor(routes) {
        this.routes = routes;
        this.defineRoutes();
    }
    defineRoutes() {
        this.routes.get('/clients', index_js_1.ControllerClients.index);
        this.routes.post('/clients', index_js_1.ControllerClients.insert);
    }
}
exports.Routes = Routes;
