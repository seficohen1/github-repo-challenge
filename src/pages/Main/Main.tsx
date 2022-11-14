import { MainContainer } from './Main.styled'
import UserCard from '../../components/UserCard/UserCard'
import RepoContainer from '../../components/RepoContainer/RepoContainer'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import Welcome from '../../components/Welcome/Welcome'
import Tilte from '../../UI/Title'

const Main = () => {
  const { searchState } = useContext(SearchContext)
  const { user } = searchState

  return (
    <>
      {!user.username ? (
        <Welcome />
      ) : (
        <>
          {' '}
          <Tilte>GitHub Repositories Search</Tilte>
          <MainContainer>
            <div className='user'>
              <UserCard />
            </div>

            <div className='repo'>
              <RepoContainer />
            </div>
          </MainContainer>
        </>
      )}
    </>
  )
}

export default Main
