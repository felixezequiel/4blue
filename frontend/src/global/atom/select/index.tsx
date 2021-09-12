import React, { HTMLAttributes } from "react"
import { CustomSelect } from "../../../styles/global/atom/select"

interface PropsSelect {
  children?: JSX.Element,
  attributes?: HTMLAttributes<HTMLSelectElement>,
  name?: string,
  required?: boolean
}
export const Select = ({ required, name, children, ...rest }:PropsSelect) => {
  return (
    <CustomSelect
      required={ required }
      name={ name }
      { ...rest }
    >
      { children }
    </CustomSelect>
  )
}