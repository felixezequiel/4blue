import { createContext, useState } from "react";
import { functionNav } from "../../global/navigation";
import { ChildrenProps } from "../../types";

export interface ValueContext {
  navigation?: functionNav
  [key: string]: any
}

export const StateGlobal = createContext<ValueContext>({ state: null, setState: null })
export const GlobalState = ({ children }: ChildrenProps) => {
  const [ state, setState ] = useState({  })
  return (
    <StateGlobal.Provider value={{ state, setState }}>
      { children }
    </StateGlobal.Provider>
  )
}