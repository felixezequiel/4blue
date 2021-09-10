import * as express from 'express'

interface Definecontroller {
  index: (req: express.Request, res: express.Response) => Promise<any>
}
export const ControllerUsers: Definecontroller = {
  async index (req, res) {
    
  }
}