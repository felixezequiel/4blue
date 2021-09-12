import { useEffect, useState } from "react"
import { RouterProps } from "react-router"
import { SearchClients } from "../../api"
import { Table } from "../../global/atom/table"
import { ContainerManage } from "../../styles/pages/manage"
// eslint-disable-next-line
export const Manage = ({  }: RouterProps) => {
  const [ clients, setClients ] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await SearchClients({ })
      setClients(response.data)
    }
    fetch()
  }, [])

  return (
    <ContainerManage>
      <h1
        style={{marginBottom: '20px' }}
      >
        Manage
      </h1>
      <Table 
        update={ true }
        view={ ['genre', 'date_of_birth', 'name', 'age'] }
        data={ clients }
      />
    </ContainerManage>
  )
}