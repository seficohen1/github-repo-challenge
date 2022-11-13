import { Repo, SearchState } from '../interfaces/intrefaces';


type ActionType  = {type: 'SET_REPOS', payload: Repo[]} | {type: 'SET_USER', payload: {username: string, fullName: string, avatar: string, following: number, followers: number}} | {type: 'RESET'}

export const searchReducer = (state: SearchState, action: ActionType): SearchState => {

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
      case 'SET_REPOS':
        return {
          ...state,
          repos: action.payload
        }
      case 'RESET': {
        return state
      }
    default:
      return state
  }
}