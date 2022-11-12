import RepoCardStyled from './RepoCard.styeld'

const RepoCard = () => {
  return (
    <RepoCardStyled>
      <header className='repo-header'>
        <h3>gitub-repo-challenge</h3>
        <div className='repo-status'>Private</div>
      </header>
      <div className='repo-description'>
        <div className='description'>
          <small className='repo-fork-info'>Forked from SquadTuring1/final-project-back</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad nihil magni vero ullam
            error ducimus aliquid necessitatibus suscipit, non nemo nulla nisi dolor beatae iusto in
            possimus at! Vitae?
          </p>
        </div>
      </div>
      <div className='repo-data'>
        <span className='language-color'></span>
        <div className='repo-data-langauge'>
          <span className='langauge-type'>JavaScript</span>
        </div>
        <div className='repo-data-star'>
          <i className='fa-solid fa-star'></i>
          <span className='stars'>33</span>
        </div>
        <div className='repo-data-updated'>
          <span>updated sometime ago</span>
        </div>
      </div>
    </RepoCardStyled>
  )
}

export default RepoCard
