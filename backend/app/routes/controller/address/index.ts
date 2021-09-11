import { ControllerRoutes } from '../../../types'
import { Models } from '../../models'

export const ControllerAddress: ControllerRoutes = {
  index: async (req, res) => Models.select(req, res, null, 'address'),
  insert: async (req, res) => Models.insert(req, res, null, 'address'),
  deleteAddress: async (req, res) => Models.delete(req, res, null, 'address'),
  update: async (req, res) => Models.update(req, res, null, 'address')
}