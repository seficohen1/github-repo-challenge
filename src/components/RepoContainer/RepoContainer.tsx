import SearchBar from '../SearchBar/SearchBar'
import RepoCard from '../RepoCard/RepoCard'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { getUserGithubInfo } from '../../services/github-api'

const RepoContainer = () => {
  const { searchState, setRepos } = useContext(SearchContext)
  const { repos, user } = searchState

  useEffect(() => {
    // Updating all repos after searching for a username
    if (user.username) {
      getUserGithubInfo(user.username, true).then((res) => setRepos(res))
    }
  }, [user.username])

  console.log(searchState)
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
