


export type Repo = {
  id: number,
  name: string,
  description?: string,
  language: string,
  private: boolean,
  updated_at: string,
  stargazers_count: number
}

/**
 * 
 * @param username github username
 * @param isRepo boolean optional to get user repos
 * @returns user details or modified array of repos objects
 */

export const getUserGithubInfo = async (username: string, isRepo = false)=> {
  const URL = isRepo ? `${process.env.REACT_APP_BASE_URL}/users/${username}/repos` : `${process.env.REACT_APP_BASE_URL}/users/${username}`
  let results: any

  try {
    const response = await fetch(URL)
    results = await response.json()

    if(isRepo) {
      const modifiedRepos = results.map((res: Repo) => ({ id: res.id, name: res.name, description: res.description, language: res.language, isPrivate: res.private, updated: res.updated_at, stars: res.stargazers_count  }))

      results = modifiedRepos
    }

    return results
  } catch (error) {
    return error.message
  }
}

