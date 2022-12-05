import { useState, useContext, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import CustomerContext from '../../Components/Contexts/CustomerContext'

function CustomerTab() {
  const {
    createCustomer,
    getCustomer,
    deleteCustomer,
    account: { loading, customers, message },
  } = useContext(CustomerContext)
  const [createModal, setCreateModal] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = { name, email, phoneNo }
    createCustomer(payload)
    setCreateModal(false)
  }

  useEffect(() => {
    getCustomer()
  }, [])

  console.log('loading')
  console.log(loading)

  return (
    <div>
      <div className="mb-2 text-end">
        <button
          className="btn btn-outline-primary"
          onClick={() => setCreateModal(true)}
        >
          Create Custommer
        </button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.length !== 0 ? (
            customers.map((item) => (
              <tr key={item._id}>
                <td>{item._id.slice(0, 7)}</td>
                <td>{item.name}</td>
                <td>{item.phoneNo}</td>
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
                    disabled={loading}
                    onClick={() => deleteCustomer(item._id)}
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
      <div>
        <Modal show={createModal} onHide={() => setCreateModal(!createModal)}>
          <Modal.Body>
            <div className="card-body">
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="fw-bold">Name </Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label className="fw-bold">Phone No</Form.Label>
                  <Form.Control
                    type="text"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    variant="success"
                    type="submit"
                    className="mt-2 px-5 fw-bold"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}

export default CustomerTab
