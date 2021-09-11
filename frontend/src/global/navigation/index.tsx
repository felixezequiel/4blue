import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { StateGlobal, ValueContext } from "../../provider/globalState";
import { ChildrenProps } from "../../types";

export interface Nav {
  destiny: string,
  state?: ValueContext
}
// eslint-disable-next-line
export type functionNav = ({  }: Nav) => void

export const Navigation = ({ children }: ChildrenProps) => {
  const { setState } = useContext(StateGlobal)
  const history = useHistory()

  useEffect(() => {
    const nav: functionNav = ({ destiny, state }: Nav) => {
      history.push({
        pathname: destiny,
        state: {
          ...state,
          routeOrigin: window.location.pathname
        }
      })
    }
    setState((prevState: any) => ({ ...prevState, navigation: nav }))
  }, [history, setState])

  return children
}