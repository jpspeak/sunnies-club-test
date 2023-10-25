const refreshTokenKey = 'rtkn'
const accessTokenKey = 'atkn'

const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(refreshTokenKey, JSON.stringify({ refreshToken }))
}

const getRefreshToken = () => {
  const jsonData = localStorage.getItem(refreshTokenKey)
  if (jsonData) {
    try {
      const data = JSON.parse(jsonData)
      return data.refreshToken || null
    } catch (e) {
      return null
    }
  }
  return null
}

const setAccessToken = (accessToken: string) => {
  localStorage.setItem(accessTokenKey, JSON.stringify({ accessToken }))
}

const getAccessToken = () => {
  const jsonData = localStorage.getItem(accessTokenKey)
  if (jsonData) {
    try {
      const data = JSON.parse(jsonData)
      return data.accessToken || null
    } catch (error) {
      return null
    }
  }
  return null
}

const removeTokens = () => {
  localStorage.removeItem(accessTokenKey)
  localStorage.removeItem(refreshTokenKey)
}

const authTokenService = {
  setRefreshToken,
  getRefreshToken,
  setAccessToken,
  getAccessToken,
  removeTokens,
  accessTokenKey,
  refreshTokenKey
}

export default authTokenService
