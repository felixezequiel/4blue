import { useContext } from "react"
import { StateGlobal } from "../../provider/globalState"
import { ContainerBody } from "../../styles/template"
import { ChildrenProps } from "../../types"

export const BodyTemplate = ({ children }: ChildrenProps) => {
  const { setState } = useContext(StateGlobal)

  const handleClick = () => setState((prevState: any) => ({ ...prevState, explain: false }))

  return (
    <ContainerBody
      onClick={ handleClick }
    >
      { children }
    </ContainerBody>
  )
}