import { Fragment, useContext } from "react"
import { StateGlobal } from "../../../provider/globalState"
import { BoxNavOptions } from "../../../styles/components/options/navOptions"
import { configNav } from "./config"



export const NavOptions = () => {
  const { state } = useContext(StateGlobal)
  return (
    <Fragment>
      {configNav.map((nav, key) => (
        <BoxNavOptions
          key={ key }
          onClick={ () => nav.onClick({ destiny: nav.destiny, state: { ...state } }) }
        >
          <img 
            src={ nav.image }
            height='15px'
            alt='home'
            style={{
              marginRight: '20px'
            }}
          />
          <span>
            { nav.name }
          </span>
        </BoxNavOptions>    
      ))}
    </Fragment>
  )
}