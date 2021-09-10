import * as express from 'express'
import { ControllerClients } from './controller/clients/index.js'

export class Routes {
  routes: express.Application
  constructor(routes: express.Application) {
    this.routes = routes
    this.defineRoutes()
  }

  private defineRoutes (): void {
    this.routes.get('/clients', ControllerClients.index)
    this.routes.post('/clients', ControllerClients.insert)
  }
}