import { Repo } from '../../interfaces/intrefaces'
import RepoCardStyled, { ColoredDot, Status } from './RepoCard.styeld'

const RepoCard = ({ name, description, stars, isPrivate, language }: Repo) => {
  // const lastUpdated: Date = new Date(updated)
  return (
    <RepoCardStyled>
      <header className='repo-header'>
        <h3>{name}</h3>
        <Status isPrivate={isPrivate}>{isPrivate ? 'Private' : 'Public'}</Status>
      </header>
      <div className='repo-description'>
        <div className='description'>
          <p>{description}</p>
        </div>
      </div>
      <div className='repo-data'>
        {language && (
          <>
            <ColoredDot color={language} />
            <div className='repo-data-langauge'>
              <span className='langauge-type'>{language}</span>
            </div>
          </>
        )}
        <div className='repo-data-star'>
          <i className='star-icon fa-solid fa-star'></i>
          <span className='stars'>{stars}</span>
        </div>
        {/* <div className='repo-data-updated'>
          <span>{updated}</span>
        </div> */}
      </div>
    </RepoCardStyled>
  )
}

export default RepoCard
