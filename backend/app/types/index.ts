import * as express from 'express'

export interface ControllerRoutes {
  [key: string]: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<any>
}