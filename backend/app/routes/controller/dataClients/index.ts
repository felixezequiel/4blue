import { ControllerRoutes } from "../../../types";
const db = require('../../../../db')

export const ControllerDataClients: ControllerRoutes = {
  async index(req, res) {
    const response = await db('clients').select('*').join('address', 'clients.id', 'address.id').where({ 'clients.id': req.query.id })
    return res.status(200).json(response)
  }
}