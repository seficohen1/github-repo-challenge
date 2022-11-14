import { useContext, useEffect } from 'react'
import { SearchContext } from '../../context/SearchContext'
import SearchBar from '../SearchBar/SearchBar'
import UserCardStyled from './UserCard.styled'

export type Props = {
  section: string
}
const UserCard = () => {
  const { searchState } = useContext(SearchContext)
  const { user } = searchState
  useEffect(() => {
    console.log('hi')
  }, [user])

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
            <i className='icon-follow fa-solid fa-users'></i>
            <span>
              {' '}
              <span className='bold'>{user.followers}</span> followers{' '}
            </span>
            <span>
              {' '}
              <span className='bold'>{user.following}</span> following{' '}
            </span>
          </div>
        </div>
      </UserCardStyled>
    </>
  )
}

export default UserCard
