import httpService from './httpService'

export const createInvoiceService = (payload) => {
  const http = new httpService()
  const url = 'invoice'
  console.log(payload)
  return http.postData(payload, url)
}

export const getInvoiceService = () => {
  const http = new httpService()
  const url = 'invoice/all'
  return http.getData(url)
}

export const deleteInvoiceService = (id) => {
  const http = new httpService()
  const url = `invoice/${id}`
  return http.deleteData(url)
}
