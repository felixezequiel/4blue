import * as express from 'express'
import { ControllerUsers } from './controller/users'

export class Routes {
  routes: express.Application
  constructor(routes: express.Application) {
    this.routes = routes
    this.defineRoutes()
  }

  private defineRoutes (): void {
    this.routes.get('/users', ControllerUsers.index)
  }
}