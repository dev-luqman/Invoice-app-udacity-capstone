// import axios from 'axios'
import axios from '../utils/axiosInstance'

class HttpService {
  postData = async (payload, url) => {
    return axios.post(url, payload)
  }

  postDataWithToken = async (formData, url) => {
    return axios.post(url, formData)
  }

  getData = async (url) => {
    return axios.get(url)
  }

  getDataWithoutToken = async (url) => {
    return axios.get(url).then((res) => res)
  }

  putData = async (formData, url) => {
    return axios.put(url, formData)
  }

  putDataWithoutToken = async (formData, url) => {
    return axios.put(url, formData)
  }

  deleteData = async (url) => {
    return axios.delete(url)
  }

  deleteDataWithData = async (formData, url) => {
    return axios.delete(url, formData)
  }
}
export default HttpService
