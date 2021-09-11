import { functionNav } from "../../../global/navigation"

interface nav {
  name: string,
  image: string,
  destiny: string,
  onClick: functionNav
}
 
export const configNav: Array<nav> = [
  {
    name: 'Home',
    image: '/images/home-4blue.svg',
    destiny: '/',
    onClick: ({ destiny, state }) => {
      return state?.navigation ? state.navigation({ destiny, state: {  } }) : null
    }
  },
  {
    name: 'Gerenciar',
    image: '/images/config-4blue.svg',
    destiny: '/manage',
    onClick: ({ destiny, state }) => {
      return state?.navigation ? state.navigation({ destiny, state: {  } }) : null
    }
  }
]