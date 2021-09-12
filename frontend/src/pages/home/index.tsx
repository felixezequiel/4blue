import reactDOM from 'react-dom'
import { useContext, useEffect, useState } from "react"
import { RouteProps } from "react-router"
import { SearchAddress, SearchClients } from "../../api"
import { Table } from "../../global/atom/table"
import { ContainerHome } from "../../styles/pages/home"
import { Address } from '../../components/addres'
import { msgInfoAddres } from '../../helpers/messages'
import { SocketIo } from '../../provider/socket'
// eslint-disable-next-line
export const Home = ({  }: RouteProps) => {
  const [ clients, setClients ] = useState([])
  const io = useContext(SocketIo)

  useEffect(() => {
    const fetch = async () => {
      const response = await SearchClients({  })
      setClients(response.data)
    }
    fetch()
    io.on('client', data => {
      setClients(data)
    })
  }, [io])

  async function tableCallBack (id: number) {
    const response = await SearchAddress({ id })
    const html = document.createElement('div')
    reactDOM.render(<Address addres={ response.data[0] || [] }/>, html)
    await msgInfoAddres(html)
  }

  return (
    <ContainerHome>
      <h1>Clients List</h1>
      <Table 
        data={ clients }
        view={ ['genre', 'date_of_birth', 'name', 'age'] }
        callback={ tableCallBack }
      />
    </ContainerHome>
  )
}