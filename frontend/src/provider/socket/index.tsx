import { createContext } from "react"
import socket from 'socket.io-client'
import { ChildrenProps } from "../../types"
const io = socket('http://localhost:3031', {autoConnect: true, })

export const SocketIo = createContext(io)
export const Socket = ({ children }: ChildrenProps) => {
  return (
    <SocketIo.Provider value={ io }>
      { children }
    </SocketIo.Provider>
  )
}