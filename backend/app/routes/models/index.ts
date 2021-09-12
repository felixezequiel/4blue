import axios, { AxiosPromise, AxiosResponse } from "axios";
import { io } from "../..";
import { FunctionRequest } from "../../types";
const db = require('../../../db')

const infoDataClients = async () => {
  const response: AxiosResponse = await axios.get('http://localhost:3030/clients')
  return io.emit('clients', response.data)
}

interface DefineModels {
  select: FunctionRequest,
  update: FunctionRequest,
  delete: FunctionRequest,
  insert: FunctionRequest
}

export const Models: DefineModels = {
  async select (req, res, _, table) {
    let response = await db(table).select('*').where(req.query).catch(() => [])
    if (table === 'clients') {
      response = response.map(client => {
        let year = new Date().getFullYear() - new Date(client.date_of_birth).getFullYear();
        if ((new Date().getMonth() + 1) <= (new Date(client.date_of_birth).getMonth() + 1) &&
        (new Date().getDate()) < (new Date(client.date_of_birth).getDate())) year--
        client.age = year
        return client
      })
    }
    return res.status(200).json(response)
  },

  async update (req, res, _, table) {
    await db(table).update(req.body).where(req.params).catch(erro => erro)
    await infoDataClients()
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
    if (table === 'clients') await infoDataClients()
    return res.status(200).json({ id: response[0] })
  }
}