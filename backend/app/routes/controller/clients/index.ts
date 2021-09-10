import * as express from 'express'
import { db } from '../../../db'

interface Definecontroller {
  index: (req: express.Request, res: express.Response) => Promise<any>
}
export const ControllerClients: Definecontroller = {
  async index (req, res) {
    const response = await db('clients').select('*')
    res.status(200).json(response)
  }
}