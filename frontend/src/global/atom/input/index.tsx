import { InputCustom } from "../../../styles/global/atom/input"
import { GenericsProps } from "../../../types"

export const Input = ({ ...rest }: GenericsProps) => {
  return (
    <InputCustom 
      { ...rest }
    />
  )
}