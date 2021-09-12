import { ContainerClose } from "../../styles/components/close"

interface PropsClose {
  callback: () => any
}

export const Close = ({ callback }: PropsClose) => {
  return (
    <ContainerClose>
      <img 
        src='/images/close-4blue.svg'
        height={ '15px' }
        alt='close'
        onClick={ callback }
        style={{
          cursor: 'pointer',
          filter: 'contrast(600%)'
        }}
      />
    </ContainerClose>
  )
}