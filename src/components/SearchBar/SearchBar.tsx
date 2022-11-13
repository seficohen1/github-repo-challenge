import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { getUserGithubInfo } from '../../services/github-api'

export type Props = {
  section: string
}

const SearchBar = ({ section }: Props) => {
  const [inputField, setInputField] = useState<string>('')
  const { setUser, searchState, resetState } = useContext(SearchContext)
  const { user } = searchState

  const placeholderText =
    section === 'user' ? 'Type username to search for a user' : 'Find Repository by this user'

  const hanldeOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputField(e.target.value)
  }
  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(section)
    if (e.code === 'Enter') {
      if (section === 'user') {
        resetState()
        getUserGithubInfo(inputField).then((res) =>
          setUser(res.login, res.name, res.avatar_url, res.following, res.followers),
        )
      }
    }
  }

  return (
    <input
      type='text'
      onKeyUp={handleOnKeyUp}
      onChange={hanldeOnChange}
      placeholder={placeholderText}
    />
  )
}

export default SearchBar
