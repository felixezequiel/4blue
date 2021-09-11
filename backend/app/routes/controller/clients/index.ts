import { ControllerRoutes } from "../../../types"
import { Models } from "../../models"

export const ControllerClients: ControllerRoutes = {
  index: async (req, res) => Models.select(req, res, null, 'clients'),
  insert: async (req, res) => Models.insert(req, res, null, 'clients'),
  deleteClients: async (req, res) => Models.delete(req, res, null, 'clients'),
  update: async (req, res) => Models.update(req, res, null, 'clients')
}