import SearchBar from '../SearchBar/SearchBar'

import UserCardStyled from './UserCard.styled'

const UserCard = () => {
  return (
    <>
      <SearchBar />
      <UserCardStyled>
        <div className='user-info'>
          <div className='avatar'>
            <img
              src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt='avatar'
            />
          </div>
          <div className='personal-info'>
            <h4>Sefi Cohen</h4>
            <span>seficohen1</span>
          </div>
        </div>
        <div className='data'>
          <div className='data-followers'>
            <i className='fa-solid fa-users'></i>
            <span> 13 followers </span>
            <span> 10 followers </span>
          </div>
        </div>
      </UserCardStyled>
      <hr />
    </>
  )
}

export default UserCard
