import ErrorStyled from './Error.styled'

type Props = {
  message: string
  children: string
}

const Error: React.FC<Props> = ({ message }: Props) => {
  return (
    <ErrorStyled>
      <p>{message}</p>
    </ErrorStyled>
  )
}

export default Error
