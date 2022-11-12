import { Repo } from '../../interfaces/intrefaces'
import RepoCardStyled from './RepoCard.styeld'

interface Props {
  repo: Repo
}

const RepoCard = ({ name, description, stars, isPrivate, updated, language }: Repo) => {
  return (
    <RepoCardStyled>
      <header className='repo-header'>
        <h3>{name}</h3>
        <div className='repo-status'>{isPrivate ? 'Private' : 'Public'}</div>
      </header>
      <div className='repo-description'>
        <div className='description'>
          <p>{description}</p>
        </div>
      </div>
      <div className='repo-data'>
        <span className='language-color'></span>
        <div className='repo-data-langauge'>
          <span className='langauge-type'>{language}</span>
        </div>
        <div className='repo-data-star'>
          <i className='fa-solid fa-star'></i>
          <span className='stars'>{stars}</span>
        </div>
        <div className='repo-data-updated'>
          <span>{updated}</span>
        </div>
      </div>
    </RepoCardStyled>
  )
}

export default RepoCard
