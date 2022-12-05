// import axios from 'axios'
// import axios from '../utils/axiosInstance'
import axios from 'axios'
let baseURL = process.env.REACT_APP_BASE_URL

class HttpService {
  postData = async (payload, url) => {
    return axios.post(`${baseURL}/${url}`, payload)
  }

  postDataWithToken = async (formData, url) => {
    return axios.post(`${baseURL}/${url}`, formData)
  }

  getData = async (url) => {
    return axios.get(`${baseURL}/${url}`)
  }

  getDataWithoutToken = async (url) => {
    return axios.get(`${baseURL}/${url}`)
  }

  putData = async (formData, url) => {
    return axios.put(`${baseURL}/${url}`, formData)
  }

  putDataWithoutToken = async (formData, url) => {
    return axios.put(`${baseURL}/${url}`, formData)
  }

  deleteData = async (url) => {
    return axios.delete(`${baseURL}/${url}`)
  }

  deleteDataWithData = async (formData, url) => {
    return axios.delete(`${baseURL}/${url}`, formData)
  }
}
export default HttpService
