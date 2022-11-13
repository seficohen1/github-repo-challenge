import { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { getUserGithubInfo } from '../../services/github-api'

export type Props = {
  section: string
}

// Creating reusable searchbar component for searching both users and their repos //

const SearchBar = ({ section }: Props) => {
  const [inputField, setInputField] = useState<string>('')
  const { setUser, setKeyword } = useContext(SearchContext)

  const placeholderText =
    section === 'user' ? 'Type username to search for a user' : 'Find Repository by this user'

  const hanldeOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputField(e.target.value)
  }
  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (section === 'user') {
        getUserGithubInfo(inputField).then((res) =>
          setUser(res.login, res.name, res.avatar_url, res.following, res.followers),
        )
      }
    }
    if (section === 'repos') {
      setKeyword(inputField)
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
