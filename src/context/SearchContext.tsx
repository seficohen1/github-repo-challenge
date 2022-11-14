import { createContext, useReducer } from 'react'
import { Repo, SearchState } from '../interfaces/intrefaces'

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
  setRepos: (repo: Repo[]) => void
  setKeyword: (keyword: string) => void
  setError: () => void
}

export const SearchContext = createContext<SearchContextProps>({} as SearchContextProps)

interface Props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: SearchState = {
  user: {
    username: '',
    fullName: '',
    avatar: '',
    following: 0,
    followers: 0,
  },
  repos: [
    {
      id: 0,
      name: '',
      description: '',
      language: '',
      isPrivate: false,
      updated: '',
      stars: 0,
    },
  ],
  keyword: '',
  error: false,
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

  const setRepos = (repo: Repo[]) =>
    dispatch({
      type: 'SET_REPOS',
      payload: repo,
    })

  const setKeyword = (keyboard: string) => dispatch({ type: 'SET_KEYWORD', payload: keyboard })

  const setError = () => {
    setTimeout(() => {
      dispatch({ type: 'SET_ERROR' })
    }, 1500)
    dispatch({ type: 'SET_ERROR' })
  }

  return (
    <SearchContext.Provider value={{ searchState, setUser, setRepos, setKeyword, setError }}>
      {children}
    </SearchContext.Provider>
  )
}
