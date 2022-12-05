import httpService from './httpService'

export const createCustomerService = (payload) => {
  const http = new httpService()
  const url = 'customer'
  console.log(payload)
  return http.postData(payload, url)
}

export const getCustomerService = () => {
  const http = new httpService()
  const url = 'customer/all'
  return http.getData(url)
}

export const deleteCustomerService = (id) => {
  const http = new httpService()
  const url = `customer/${id}`
  return http.deleteData(url)
}
