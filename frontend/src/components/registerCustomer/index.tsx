import react, { FormEvent, Fragment } from "react"
import { Button } from "../../global/atom/button"
import { Input } from "../../global/atom/input"
import { Select } from "../../global/atom/select"
import { ContainerRegisterCustomer, FormRegisterCostumer } from "../../styles/components/registerCustomer"
import { Close } from "../close"
import serialize from 'form-serialize'
import { InsertAddress, InsertClient, UpdateAddress, UpdateClients } from "../../api"

interface PropsRegister {
  setRegister: react.Dispatch<react.SetStateAction<boolean>>,
  dataClients?: any
}

export const RegisterCustomer = ({ setRegister, dataClients }: PropsRegister) => {
  const closeWindow = () => setRegister(prevState => !prevState)
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = serialize<{ client: { [key: string]: any }, address: { [key: string]: any } }>(event.currentTarget, { empty: true, hash: true })
    if (dataClients.name) {
      console.log('update');
      
      await UpdateClients({ ...data.client, id: dataClients.id })
      await UpdateAddress({ ...data.address, id: dataClients.id, number: +data.address.number })
    } else {
      const response = await InsertClient(data.client)
      await InsertAddress({ ...data.address, id: response.data.id })
    }
    setRegister(prevState => !prevState)
  }

  return (
    <ContainerRegisterCustomer>
      <Close callback={ closeWindow } />
      <FormRegisterCostumer
        onSubmit={ handleSubmit }
      >
        <label >
          Name:
          <Input 
            defaultValue={ dataClients.name }
            name='client[name]'
            placeholder='Name...'
            required
          />
        </label>
        <label>
          Genre:
          <Select
            required={ true }
            name='client[genre]'
            attributes={{
              defaultValue: dataClients.genre
            }}
          >
            <Fragment>
              <option
                value='M'
              >
                M
              </option>
              <option
                value='F'
              >
                F
              </option>
            </Fragment>
          </Select>
        </label>
        <label>
          Date of birth:
          <Input 
            defaultValue={ dataClients.date_of_birth }
            type='date'
            name='client[date_of_birth]'
            required
          />
        </label>
        <label>
          Street:
          <Input
            defaultValue={ dataClients.street }
            placeholder='Street...'
            name='address[street]'
            required
          />
        </label>
        <label>
          District:
          <Input
            defaultValue={ dataClients.district }
            placeholder='District...'
            name='address[district]'
            required
          />
        </label>
        <label>
          Number:
          <Input
            defaultValue={ dataClients.number }
            placeholder='number...'
            name='address[number]'
            type='number'
            required
          />
        </label>
        <label>
          City:
          <Input
            defaultValue={ dataClients.city }
            placeholder='City...'
            name='address[city]'
            required
          />
        </label>
        <label>
          CEP:
          <Input
            defaultValue={ dataClients.cep }
            placeholder='CEP...'
            name='address[cep]'
            required
          />
        </label>
        <label>
          Reference Point:
          <Input
            defaultValue={ dataClients.reference_point }
            placeholder='Reference point...'
            name='address[reference_point]'
          />
        </label>
        <Button 
          type='submit'
          text={ dataClients.name ? 'update' : 'Register'}
        />
      </FormRegisterCostumer>     
    </ContainerRegisterCustomer>
  )
}