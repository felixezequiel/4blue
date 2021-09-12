import { useContext, useEffect, useState } from "react"
import { RouterProps } from "react-router"
import { SearchClients, SearchDataClients } from "../../api"
import { RegisterCustomer } from "../../components/registerCustomer"
import { Button } from "../../global/atom/button"
import { Table } from "../../global/atom/table"
import { SocketIo } from "../../provider/socket"
import { ContainerManage } from "../../styles/pages/manage"

// eslint-disable-next-line
export const Manage = ({  }: RouterProps) => {
  const io = useContext(SocketIo)

  const [ clients, setClients ] = useState([])
  const [ register, setRegister ] = useState(false)
  const [ dataClients, setDataClients ] = useState({})

  useEffect(() => {
    const fetch = async () => {
      const response = await SearchClients({ })
      setClients(response.data)
    }
    fetch()
    io.on('clients', data => {
      setClients(data)
    })
  }, [io])

  const handleClick =( ) => {
    setRegister(true)
  }

  async function tableCallBack (id: number) {
    const response = await SearchDataClients({ id })
    setDataClients(response.data[0])
    setRegister(true)
  }

  useEffect(() => {
    if (register === false) {
      setDataClients({})
    }
  }, [register])

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
        callback={ tableCallBack }
      />
      {register ? <RegisterCustomer setRegister={ setRegister } dataClients={ dataClients }/> : <></>}
      <Button 
        text='Register Consumer'
        type='Button'
        onClick={ handleClick }
      />
    </ContainerManage>
  )
}