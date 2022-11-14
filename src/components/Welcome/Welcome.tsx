import { useSearch } from '../../hooks/useSearchContex'
import SearchBar from '../SearchBar/SearchBar'
import WelcomeStyled from './Welcome.styled'
import Error from '../Error/Error'
import Tilte from '../../UI/Title'

const Welcome = () => {
  const { error } = useSearch()

  return (
    <WelcomeStyled>
      <Tilte>GitHub Repositories Search</Tilte>
      <i className='github-icon fa-brands fa-github'></i>
      <div className='search-bar'>
        <SearchBar section='user' />
      </div>
      {error && <Error message='User was not found'>Error</Error>}
    </WelcomeStyled>
  )
}

export default Welcome
