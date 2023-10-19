const refreshTokenKey = 'rtkn'
const accessTokenKey = 'atkn'

const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(refreshTokenKey, refreshToken)
}

const getRefreshToken = () => {
  return localStorage.getItem(refreshTokenKey)
}

const setAccessToken = (accessToken: string) => {
  localStorage.setItem(accessTokenKey, accessToken)
}

const getAccessToken = () => {
  return localStorage.getItem(accessTokenKey)
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
  removeTokens
}

export default authTokenService
