import { Children, createContext, useReducer } from 'react'
import { Repo, SearchState } from '../interfaces/intrefaces'
import { getUserGithubInfo } from '../services/github-api'
import { searchReducer } from './SearchReducer'

export type SearchContextProps = {
  searchState: SearchState
  setUser: (
    username: string,
    fullName: string,
    avatar: string,
    following: number,
    followers: number,
  ) => void
}

export const SearchContext = createContext<SearchContextProps>({} as SearchContextProps)

interface Props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: SearchState = {
  user: {
    username: 'seficohen1',
    fullName: '',
    avatar: 'https://avatars.githubusercontent.com/u/67965039?v=4',
    following: 0,
    followers: 0,
  },
  repos: [
    {
      id: 1,
      name: 'drag and drop',
      description: 'new project',
      language: 'JavaScript',
      isPrivate: false,
      updated: 'today',
      stars: 8,
    },
  ],
}

export const SearchProvider = ({ children }: Props) => {
  const [searchState, dispatch] = useReducer(searchReducer, INITIAL_STATE)
  const setUser = (
    username: string,
    fullName: string,
    avatar: string,
    following: number,
    followers: number,
  ) => dispatch({ type: 'SET_USER', payload: { username, fullName, avatar, following, followers } })

  return (
    <SearchContext.Provider value={{ searchState, setUser }}>{children}</SearchContext.Provider>
  )
}
