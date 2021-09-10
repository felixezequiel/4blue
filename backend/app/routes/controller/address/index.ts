import { ControllerRoutes } from '../../../types'

const db = require('../../../../db')

export const ControllerAddress: ControllerRoutes = {
  
  async index (req, res) {
    const response = await db('address').select('*').where(req.query).catch(() => [])
    return res.status(200).json(response)
  },

  async insert(req, res) {
    const response = await db('address').insert(req.body).catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(204).send()
  },

  async deleteAddress(req, res) {
    const response = await db('address').delete().where(req.params).catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(204).send()
  },

  async update (req, res) {
    await db('address').update(req.body).where(req.params)
    return res.status(204).send()
  }
}