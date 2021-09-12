import axios, { AxiosPromise } from "axios"
import { buildKeys } from "./helpers"

const host = 'http://localhost:3030'
//clients
export const SearchClients = (dados?: { [key: string]: any }): AxiosPromise => axios.get(host + '/clients' + buildKeys(dados || {  }))
export const UpdateClients = (dados?: { [key: string]: any }): AxiosPromise => axios.put(host + '/clients/' + dados?.id, dados)
export const DeleteClients = (dados?: { [key: string]: any }): AxiosPromise => axios.delete(host + '/clients/' + dados?.id, dados)
export const InsertClient = (dados?: { [key: string]: any }): AxiosPromise => axios.post(host + '/clients', dados)
//address
export const SearchAddress = (dados?: { [key: string]: any }):AxiosPromise => axios.get(host + '/address' + buildKeys(dados || {  })) 
export const UpdateAddress = (dados?: { [key: string]: any }):AxiosPromise => axios.put(host + '/address/' + dados?.id, dados) 
export const DeleteAddress = (dados?: { [key: string]: any }):AxiosPromise => axios.delete(host + '/address/' + dados?.id)
export const InsertAddress = (dados?: { [key: string]: any }): AxiosPromise => axios.post(host + '/address', dados)

//dataClients 
export const SearchDataClients = (dados: { id: number }): AxiosPromise => axios.get(host + '/dataClients?id='+dados.id)