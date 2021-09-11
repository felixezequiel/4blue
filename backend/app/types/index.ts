import * as express from 'express'

export type FunctionRequest = (req: express.Request, res: express.Response, next?: express.NextFunction, table?: string) => Promise<any>

export interface ControllerRoutes {
  [key: string]: FunctionRequest
}