import { ControllerRoutes } from "../../../types"
import { View } from "../../view"

export const ControllerClients: ControllerRoutes = {
  index: async (req, res) => View.select(req, res, null, 'clients'),
  insert: async (req, res) => View.insert(req, res, null, 'clients'),
  deleteClients: async (req, res) => View.delete(req, res, null, 'clients'),
  update: async (req, res) => View.update(req, res, null, 'clients')
}