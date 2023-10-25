const refreshTokenKey = 'rtkn'
const accessTokenKey = 'atkn'

const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(refreshTokenKey, JSON.stringify({ refreshToken }))
}

const getRefreshToken = () => {
  const data = localStorage.getItem(refreshTokenKey)
  if (data) {
    return JSON.parse(data).refreshToken
  }
  return null
}

const setAccessToken = (accessToken: string) => {
  localStorage.setItem(accessTokenKey, JSON.stringify({ accessToken }))
}

const getAccessToken = () => {
  const data = localStorage.getItem(accessTokenKey)
  if (data) {
    return JSON.parse(data).accessToken
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
