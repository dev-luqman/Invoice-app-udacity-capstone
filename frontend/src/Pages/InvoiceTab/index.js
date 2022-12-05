import { useState, useContext, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

import InvoiceContext from '../../Components/Contexts/InvoiceContext'

function InvoiceTab() {
  const {
    createInvoice,
    getInvoice,
    deleteInvoice,
    invoiceData: { loading, invoices, message },
  } = useContext(InvoiceContext)

  const totaCost = (data) => {
    let totalSum = 0
    let totalDiscount = 0
    data.forEach((element) => {})
    return 5000
  }

  useEffect(() => {
    getInvoice()
  }, [])

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Item Qty</th>
            <th>Total Cost</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices && invoices.length !== 0 ? (
            invoices.map((item) => (
              <tr key={item._id}>
                <td>{item._id.slice(0, 7)}</td>
                <td>{item?.userId?.name}</td>
                <td>{item?.items?.length}</td>
                <td>{totaCost(item?.items)}</td>
                <td>{item.createdAt}</td>
                <td>
                  <button
                    className="btn btn-outline-primary me-2 btn-sm"
                    disabled={loading}
                  >
                    Preview
                  </button>
                  <button
                    className="btn btn-outline-danger me-2 btn-sm"
                    onClick={() => deleteInvoice(item._id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <span className="text-center text-muted">Data empty</span>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default InvoiceTab
