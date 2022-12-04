import axios from 'axios'

const checkAuthTokens = () => {
  let authTokens = localStorage.getItem('rydeChatToken')
    ? JSON.parse(localStorage.getItem('rydeChatToken'))
    : null

  return authTokens
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // headers: { Authorization: `Bearer ${checkAuthTokens()?.accessToken}` },
})

axiosInstance.interceptors.request.use(async (req) => {
  if (checkAuthTokens()) {
    req.headers.Authorization = `Bearer ${checkAuthTokens()?.accessToken}`
  }
  req.headers.requester = req.baseURL
  req.headers['nryde-source'] = 'admin-dashboard'
  return req
})

axiosInstance.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    const originalConfig = error.config
    if (error.response) {
      if (error.response.status === 401) {
        try {
          const rs = await refreshToken()
          if (rs) {
            const { result } = rs.data
            localStorage.setItem('rydeChatToken', JSON.stringify(result))
            axiosInstance.defaults.headers.Authorization = `Bearer ${result?.accessToken}`
            return axiosInstance(originalConfig)
          }
        } catch (_error) {
          window.location.href = '/login'
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data)
          }
          return Promise.reject(_error)
        }
      }
    }
    return Promise.reject(error)
  },
)

async function refreshToken() {
  if (localStorage.getItem('rydeChatToken')) {
    const result = await axiosInstance.post('/auth/refreshToken', {
      refreshToken: JSON.parse(localStorage.getItem('rydeChatToken'))
        .refreshToken,
    })
    return result
  } else {
    return null
  }
}

export default axiosInstance
