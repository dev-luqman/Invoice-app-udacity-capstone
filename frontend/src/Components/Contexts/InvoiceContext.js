import { createContext, useState } from 'react'
import {
  createInvoiceService,
  getInvoiceService,
  deleteInvoiceService,
} from '../../services/invoiceService'

const InvoiceContext = createContext()

export function InvoiceProvider({ children }) {
  const [invoiceData, setInvoiceData] = useState({
    invoices: null,
    message: null,
    loading: false,
    error: null,
  })

  const setLoading = () => {
    setInvoiceData((preState) => {
      return {
        ...preState,
        loading: true,
      }
    })
  }

  const createInvoice = (data) => {
    setLoading()
    createInvoiceService(data)
      .then((res) => {
        return getInvoice()
      })
      .catch((err) => {
        setInvoiceData((preState) => {
          return {
            ...preState,
            loading: false,
            error: err,
          }
        })
      })
  }

  const getInvoice = () => {
    setLoading()
    getInvoiceService()
      .then((res) => {
        setInvoiceData((preState) => {
          return {
            ...preState,
            invoices: res?.data?.invoice,
            loading: false,
          }
        })
      })
      .catch((err) => {
        setInvoiceData((preState) => {
          return {
            ...preState,
            loading: false,
            error: err,
          }
        })
      })
  }

  const deleteInvoice = (id) => {
    setLoading()
    deleteInvoiceService(id)
      .then((res) => {
        return getInvoice()
      })
      .catch((err) => {
        setInvoiceData((preState) => {
          return {
            ...preState,
            loading: false,
            error: err,
          }
        })
      })
  }

  return (
    <InvoiceContext.Provider
      value={{ invoiceData, createInvoice, getInvoice, deleteInvoice }}
    >
      {children}
    </InvoiceContext.Provider>
  )
}

export default InvoiceContext
