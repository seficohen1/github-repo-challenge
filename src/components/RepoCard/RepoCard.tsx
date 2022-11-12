const RepoCard = () => {
  return (
    <section>
      <header className='repo-header'>
        <h3 className='repo-title'>repo title</h3>
        <span className='repo-status'>Private</span>
        <small className='repo-fork-info'>fork info</small>
        <p className='repo-description'>description about repo</p>
      </header>
      <div className='repo-data'>
        <div className='repo-data-langauge'>
          <span className='language-color'>color</span>
          <span className='langauge-type'>langauge</span>
        </div>
        <div className='repo-data-fork'>
          <span className='fork-icon'>icon + number</span>
        </div>
        <div className='repo-data-updated'>
          <span>updated sometime ago</span>
        </div>
      </div>
    </section>
  )
}

export default RepoCard
