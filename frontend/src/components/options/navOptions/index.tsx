import { useContext } from "react"
import { StateGlobal } from "../../../provider/globalState"
import { BoxNavOptions } from "../../../styles/components/options/navOptions"
import { ContainerNavOptions } from "../../../styles/template"
import { configNav } from "./config"

export const NavOptions = () => {
  const { state, setState } = useContext(StateGlobal)
  
  return (
    <ContainerNavOptions>
      {configNav.map((nav, key) => (
        <BoxNavOptions
          key={ key }
          onClick={ () => {
            setState((prevState: any) => ({ ...prevState, explain: false }))
            nav.onClick({ destiny: nav.destiny, state: { ...state } })
          }}
        >
          <img 
            src={ nav.image }
            height='15px'
            alt={nav.name}
            style={{
              marginRight: '20px'
            }}
          />
          <span>
            { nav.name }
          </span>
        </BoxNavOptions>    
      ))}
    </ContainerNavOptions>
  )
}