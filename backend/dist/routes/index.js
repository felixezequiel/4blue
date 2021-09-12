"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const index_js_1 = require("./controller/address/index.js");
const index_js_2 = require("./controller/clients/index.js");
const index_js_3 = require("./controller/dataClients/index.js");
class Routes {
    constructor(routes) {
        this.routes = routes;
        this.defineRoutes();
    }
    defineRoutes() {
        //rotas de clientes
        this.routes.get('/clients', index_js_2.ControllerClients.index);
        this.routes.post('/clients', index_js_2.ControllerClients.insert);
        this.routes.put('/clients/:id', index_js_2.ControllerClients.update);
        this.routes.delete('/clients/:id', index_js_2.ControllerClients.deleteClients);
        //Rotas de endereço
        this.routes.get('/address', index_js_1.ControllerAddress.index);
        this.routes.post('/address', index_js_1.ControllerAddress.insert);
        this.routes.put('/address/:id', index_js_1.ControllerAddress.update);
        this.routes.delete('/address/:id', index_js_1.ControllerAddress.deleteAddress);
        //Relacionamento
        this.routes.get('/dataClients', index_js_3.ControllerDataClients.index);
    }
}
exports.Routes = Routes;
