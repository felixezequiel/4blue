import { ControllerRoutes } from "../../../types"

const db = require('../../../../db')

export const ControllerClients: ControllerRoutes = {

  async index (req, res) {
    const response = await db('clients').select('*').where(req.query).catch(() => [])
    return res.status(200).json(response)
  },

  async insert(req, res) {
    const response = await db('clients').insert(req.body, 'id').catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(404).json(response)
    return res.status(200).json({ id: response[0] })
  },

  async deleteClients (req, res) {
    const response = await db('clients').delete().where(req.params).catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(204).send()
  },

  async update (req, res) {
    await db('clients').update(req.body).where(req.params)
    return res.status(204).send()
  }
}