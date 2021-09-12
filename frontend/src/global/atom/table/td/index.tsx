import { ChangeEvent, useState } from "react";
import { UpdateClients } from "../../../../api";
import { GenericsProps } from "../../../../types";
import { TdCustom } from "../style";

export const TdUpdate = ({ value, update, id, column }: GenericsProps) => {
  const [ text, setText ] = useState(value)
  const [ input, setInput ] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }

  const handleContext = (event: any) => {
    event.preventDefault()
    setInput(true)
  }

  const handleBlur = async () => {
    await UpdateClients({ id, [column]: text })
    setInput(false)
  }

  return (
    <TdCustom
      onContextMenu={ handleContext }
    >
      <input
        style={{
          border: 'none',
          width: '100%',
          height: '30px',
          outline: 'none'
        }}
        readOnly={ !update || (update && !input) }
        autoFocus={ true }
        onBlur={ handleBlur }
        onChange={ handleChange }
        value={ text }
      />
    </TdCustom>
  )
}