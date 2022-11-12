import { MainContainer } from './Main.styled'
import SearchBar from '../../components/SearchBar/SearchBar'
import UserCard from '../../components/UserCard/UserCard'
import RepoContainer from '../../components/RepoContainer/RepoContainer'

const Main = () => {
  return (
    <MainContainer>
      <UserCard />
      <RepoContainer />
    </MainContainer>
  )
}

export default Main
