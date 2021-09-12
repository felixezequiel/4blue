import * as express from 'express'
import { ControllerAddress } from './controller/address/index.js'
import { ControllerClients } from './controller/clients/index.js'
import { ControllerDataClients } from './controller/dataClients/index.js'

export class Routes {
  routes: express.Application
  constructor(routes: express.Application) {
    this.routes = routes
    this.defineRoutes()
  }

  private defineRoutes (): void {
    //rotas de clientes
    this.routes.get('/clients', ControllerClients.index)
    this.routes.post('/clients', ControllerClients.insert)
    this.routes.put('/clients/:id', ControllerClients.update)
    this.routes.delete('/clients/:id', ControllerClients.deleteClients)
    
    //Rotas de endereço
    this.routes.get('/address', ControllerAddress.index)
    this.routes.post('/address', ControllerAddress.insert)
    this.routes.put('/address/:id', ControllerAddress.update)
    this.routes.delete('/address/:id', ControllerAddress.deleteAddress)

    //Relacionamento
    this.routes.get('/dataClients', ControllerDataClients.index)
    
  }
}