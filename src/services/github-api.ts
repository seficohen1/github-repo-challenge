

export const getUserGithubInfo = async (username: string, isRepo = false)=> {
  const URL = isRepo ? `${process.env.REACT_APP_BASE_URL}/users/${username}/repos` : `${process.env.REACT_APP_BASE_URL}/users/${username}`

  try {
    const response = await fetch(URL)
    const result = await response.json()
    return result
  } catch (error) {
    return error.message
  }
}

