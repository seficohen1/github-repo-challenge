import SearchBar from '../SearchBar/SearchBar'
import RepoCard from '../RepoCard/RepoCard'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const RepoContainer = () => {
  const { searchState } = useContext(SearchContext)
  const { repos } = searchState

  const renderRepos = repos.map(
    ({ id, name, description, language, isPrivate, updated, stars }) => (
      <RepoCard
        key={id}
        id={id}
        name={name}
        description={description}
        language={language}
        isPrivate={isPrivate}
        updated={updated}
        stars={stars}
      />
    ),
  )
  return (
    <article>
      <SearchBar section='repos' />
      <hr />
      {renderRepos}
      <hr />
    </article>
  )
}

export default RepoContainer
