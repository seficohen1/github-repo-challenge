import { useContext } from 'react'

import { SearchContext } from '../context/SearchContext'

export const useSearch = () => {
  const { searchState } = useContext(SearchContext)
  const { user, repos, error, keyword } = searchState

  return { user, repos, error, keyword }
}
