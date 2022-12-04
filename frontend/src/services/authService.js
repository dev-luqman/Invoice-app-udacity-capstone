import httpService from './httpService'

export const LoginService = (payload) => {
  const http = new httpService()
  const url = 'auth/login'
  console.log(payload)
  return http.postData(payload, url)
}

export const LoadUserServer = () => {
  const http = new httpService()
  const url = 'user'
  return http.getData(url)
}

export const GetChatToken = () => {
  const http = new httpService()
  const url = 'chat/token'
  return http.getData(url)
}
