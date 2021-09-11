interface PropsLogo {
  height?: number
  [key: string]: any
}
export const Logo = ({ height, ...rest }: PropsLogo) => {
  return (
    <img 
      src='/images/logo-4blue.png'
      height={ height || 50 + 'px' }
      alt='logo'
      { ...rest }
    />
  )
}