import reactDOM from 'react-dom'
import { useEffect, useState } from "react"
import { RouteProps } from "react-router"
import { SearchAddress, SearchClients } from "../../api"
import { Table } from "../../global/atom/table"
import { ContainerHome } from "../../styles/pages/home"
import { Address } from '../../components/addres'
import { msgInfoAddres } from '../../helpers/messages'
// eslint-disable-next-line
export const Home = ({  }: RouteProps) => {
  const [ clients, setClients ] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await SearchClients({  })
      setClients(response.data)
    }
    fetch()
  }, [])

  async function tableCallBack (id: number) {
    const response = await SearchAddress({ fk_id: id })
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