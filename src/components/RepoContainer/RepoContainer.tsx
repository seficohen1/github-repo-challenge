import SearchBar from '../SearchBar/SearchBar'
import RepoCard from '../RepoCard/RepoCard'
import { useContext, useEffect } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { getUserGithubInfo } from '../../services/github-api'
import { searchWithRegex } from '../../helpers/searchWithRegex'
import Error from '../Error/Error'

const RepoContainer = () => {
  const { searchState, setRepos } = useContext(SearchContext)
  const { repos, user, keyword } = searchState

  useEffect(() => {
    // Updating all repos after searching for a username
    if (user.username) {
      getUserGithubInfo(user.username, true).then((res) => setRepos(res))
    }
  }, [user.username])

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
    <>
      {repos.length === 0 ? (
        <Error message='User has no repositories'>no repos</Error>
      ) : (
        <>
          <article>
            <SearchBar section='repos' />
            {keyword.length > 0
              ? searchWithRegex(repos, keyword).map((repo) => (
                  <RepoCard
                    key={repo.id}
                    id={repo.id}
                    name={repo.name}
                    description={repo.description}
                    language={repo.language}
                    isPrivate={repo.isPrivate}
                    updated={repo.updated}
                    stars={repo.stars}
                  />
                ))
              : renderRepos}
          </article>
        </>
      )}
    </>
  )
}

export default RepoContainer
