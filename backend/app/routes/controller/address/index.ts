import { ControllerRoutes } from '../../../types'
import { View } from '../../view'

export const ControllerAddress: ControllerRoutes = {
  index: async (req, res) => View.select(req, res, null, 'address'),
  insert: async (req, res) => View.insert(req, res, null, 'address'),
  deleteAddress: async (req, res) => View.delete(req, res, null, 'address'),
  update: async (req, res) => View.update(req, res, null, 'address')
}