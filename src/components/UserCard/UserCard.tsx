import { useContext, useEffect } from 'react'
import { SearchContext } from '../../context/SearchContext'
import SearchBar from '../SearchBar/SearchBar'

import UserCardStyled from './UserCard.styled'

const UserCard = () => {
  const { searchState } = useContext(SearchContext)
  const { user } = searchState
  useEffect(() => {}, [user])

  return (
    <>
      <SearchBar section='user' />
      <UserCardStyled>
        <div className='user-info'>
          <div className='avatar'>
            <img src={user.avatar} alt='avatar' />
          </div>
          <div className='personal-info'>
            <h4>{user.fullName}</h4>
            <span>{user.username}</span>
          </div>
        </div>
        <div className='data'>
          <div className='data-followers'>
            <i className='fa-solid fa-users'></i>
            <span> {user.followers} followers </span>
            <span> {user.following} following </span>
          </div>
        </div>
      </UserCardStyled>
      <hr />
    </>
  )
}

export default UserCard
