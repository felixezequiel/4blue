import { useContext } from "react"
import { StateGlobal } from "../../provider/globalState"
import { ContainerOptions } from "../../styles/template"
import { NavOptions } from "./navOptions"

export const Options = () => {
  const { state, setState } = useContext(StateGlobal)

  const handleClick = () => setState((prevState: any) => ({ ...prevState, explain: true }))
  
  return (
    <ContainerOptions
      explain={ state.explain }
    >
      {
        !state.explain ?
          <img 
            src="/images/menu-4blue.svg"
            height='20px'
            alt='button-menu'
            onClick={ handleClick }
            style={{
              margin: '10px',
              cursor: 'pointer'
            }}
          />
        : <NavOptions /> 
      }
    </ContainerOptions>
  )
}