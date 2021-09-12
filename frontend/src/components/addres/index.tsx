import { BoxAddress, ContainerAddress } from "../../styles/components/address";
import { GenericsProps } from "../../types";

export const Address = ({ addres }: GenericsProps) => {
  return (
    <ContainerAddress>
      <h1
        style={{
          marginBottom: '15px'
        }}
      >
        Address
      </h1>
      <BoxAddress>
        <span>
          Street:
        </span>
        <span>
          {addres.street}
        </span>
      </BoxAddress>
      <BoxAddress>
        <span>
          Number:
        </span>
        <span>
          {addres.number}
        </span>
      </BoxAddress>
      <BoxAddress>
        <span>
          District:
        </span>
        <span>
          {addres.district}
        </span>
      </BoxAddress>
      <BoxAddress>
        <span>
          City:
        </span>
        <span>
          {addres.city}
        </span>
      </BoxAddress>
      <BoxAddress>
        <span>
          Reference Point:
        </span>
        <span>
          {addres.reference_point}
        </span>
      </BoxAddress>
    </ContainerAddress>
  )
}