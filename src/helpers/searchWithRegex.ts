
/** helper function to search for matching repos names
 *
 * @param repos array of user repos
 * @param keyword search keword
 * @returns new array of matching repos by name case insensitive
 */

import { Repo } from '../interfaces/intrefaces'

export const  searchWithRegex = (repos: Repo[], keyword: string) => {
  const regex = new RegExp(keyword, 'ig')

  return repos.filter(rep => rep.name.match(regex))
}