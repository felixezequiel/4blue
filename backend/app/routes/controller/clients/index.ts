import * as express from 'express'

const db = require('../../../../db')

interface Definecontroller {
  [key: string]: (req: express.Request, res: express.Response, next?: express.NextFunction) => Promise<any>
}

export const ControllerClients: Definecontroller = {

  async index (req, res) {
    const response = await db('clients').select('*').where(req.query).catch(() => [])
    return res.status(200).json({ response })
  },

  async insert(req, res) {
    const response = await db('clients').insert(req.body).catch(erro => ({error: true, message: erro}))
    if (response.erro) return res.status(404).json(response)
    return res.status(204).send()
  }
}