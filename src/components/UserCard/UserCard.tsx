const UserCard = () => {
  return (
    <section>
      <div className='avatar'></div>
      <div className='personal-info'>
        <h3>Sefi Cohen</h3>
        <h4>seficohen1</h4>
      </div>
      <div className='data'>
        <div className='data-followers'>
          <img src='' alt='followers-icon' /> <span> 13 followers </span>
        </div>
        <div className='data-following'>
          <img src='' alt='following-icon' /> <span> 10 followers </span>
        </div>
      </div>
    </section>
  )
}

export default UserCard
