import { createContext, useState } from 'react'
import {
  createCustomerService,
  getCustomerService,
  deleteCustomerService,
} from '../../services/customerService'

const CustomerContext = createContext()

export function CustomerProvider({ children }) {
  const [account, setAccount] = useState({
    customers: null,
    message: null,
    loading: false,
    error: null,
  })

  const setLoading = () => {
    setAccount((preState) => {
      return {
        ...preState,
        loading: true,
      }
    })
  }

  const createCustomer = (data) => {
    setLoading()
    createCustomerService(data)
      .then((res) => {
        return getCustomer()
        // setAccount((preState) => {
        //   return {
        //     ...preState,
        //     message: res.data.msg,
        //     loading: false,
        //   }
        // })
      })
      .catch((err) => {
        setAccount((preState) => {
          return {
            ...preState,
            loading: false,
            error: err,
          }
        })
      })
  }

  const getCustomer = () => {
    setLoading()
    getCustomerService()
      .then((res) => {
        setAccount((preState) => {
          return {
            ...preState,
            customers: res?.data?.customer,
            loading: false,
          }
        })
      })
      .catch((err) => {
        setAccount((preState) => {
          return {
            ...preState,
            loading: false,
            error: err,
          }
        })
      })
  }

  const deleteCustomer = (id) => {
    setLoading()
    deleteCustomerService(id)
      .then((res) => {
        return getCustomer()
      })
      .catch((err) => {
        setAccount((preState) => {
          return {
            ...preState,
            loading: false,
            error: err,
          }
        })
      })
  }

  return (
    <CustomerContext.Provider
      value={{ account, createCustomer, getCustomer, deleteCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerContext
