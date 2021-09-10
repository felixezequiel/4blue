"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const clients_1 = require("./controller/clients");
class Routes {
    constructor(routes) {
        this.routes = routes;
        this.defineRoutes();
    }
    defineRoutes() {
        this.routes.get('/clients', clients_1.ControllerClients.index);
    }
}
exports.Routes = Routes;
