import { ContainerAddress } from "../../styles/components/address";
import { GenericsProps } from "../../types";

export const Address = ({ addres }: GenericsProps) => {
  console.log(addres);
  
  return (
    <ContainerAddress>
      <h1>Address</h1>
      <p>Street: { addres.street }</p>
      <p>Number: { addres.number }</p>
      <p>District: { addres.district }</p>
      <p>City: { addres.city }</p>
      <p>Reference Point: { addres.reference_point }</p>
    </ContainerAddress>
  )
}