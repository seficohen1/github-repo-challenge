import { useSearch } from '../../hooks/useSearchContex'
import SearchBar from '../SearchBar/SearchBar'
import WelcomeStyled from './Welcome.styled'
import Error from '../Error/Error'

const Welcome = () => {
  const { error, user } = useSearch()

  return (
    <WelcomeStyled>
      <h1>GitHub Repositories search</h1>
      <i className='github-icon fa-brands fa-github'></i>
      <SearchBar section='user' />
      {error && <Error message='User was not found'>Error</Error>}
    </WelcomeStyled>
  )
}

export default Welcome
