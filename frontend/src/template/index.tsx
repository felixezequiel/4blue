import { BodyTemplate } from "../components/bodyTemplate"
import { Logo } from "../components/logo"
import { Options } from "../components/options"
import { ContainerHeader, GridTemplate } from "../styles/template"
import { ChildrenProps } from "../types"

export const Template = ({ children }: ChildrenProps) => {
  return (
    <GridTemplate>
      <ContainerHeader>
        <Logo 
          height={ 80 }
        />
      </ContainerHeader>
      <Options />
      <BodyTemplate>
        { children }
      </BodyTemplate>
    </GridTemplate>
  )
}