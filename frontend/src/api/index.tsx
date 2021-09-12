import axios, { AxiosPromise } from "axios"
import { buildKeys } from "./helpers"

const host = 'http://localhost:3030'
//clients
export const SearchClients = (dados?: { [key: string]: any }): AxiosPromise => axios.get(host + '/clients' + buildKeys(dados || {  }))
export const UpdateClients = (dados?: { [key: string]: any }): AxiosPromise => axios.put(host + '/clients/' + dados?.id, dados)

//address
export const SearchAddress = (dados?: { [key: string]: any }):AxiosPromise => axios.get(host + '/address' + buildKeys(dados || {  })) 
