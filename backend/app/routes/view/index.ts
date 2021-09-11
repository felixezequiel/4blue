import { FunctionRequest } from "../../types";
const db = require('../../../db')

interface DefineView {
  select: FunctionRequest,
  update: FunctionRequest,
  delete: FunctionRequest,
  insert: FunctionRequest
}

export const View: DefineView = {
  async select (req, res, _, table) {
    const response = await db(table).select('*').where(req.query).catch(() => [])
    return res.status(200).json(response)
  },

  async update (req, res, _, table) {
    await db(table).update(req.body).where(req.params)
    return res.status(204).send()
  },

  async delete (req, res, _, table) {
    const response = await db(table).delete().where(req.params).catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(400).json(response)
    return res.status(204).send()
  },

  async insert (req, res, _, table) {
    const response = await db(table).insert(req.body, 'id').catch(erro => ({ error: true, message: erro }))
    if (response.error) return res.status(404).json(response)
    return res.status(200).json({ id: response[0] })
  }
}