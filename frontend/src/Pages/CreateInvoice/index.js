import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import FormContainer from './FormContainer'

import logo from '../../assets/images/logo-invoice.jpg'
import { Container } from 'react-bootstrap'

const CreateInvoice = () => {
  const navigate = useNavigate()

  return (
    <div>
      <header className="bg-light shadow-lg p-3">
        <Nav
          defaultActiveKey="/"
          as="ul"
          className="d-flex align-items-center justify-content-between"
        >
          <Nav.Item
            as="li"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <img src={logo} alt="logo" height="50" width="auto" />
          </Nav.Item>
        </Nav>
      </header>
      <Container className="mt-4">
        <h2 className="fw-bold text-secondary mb-4">
          {' '}
          <span className="text-warning"> Create </span> Invoice{' '}
        </h2>
        <div>
          <FormContainer />
        </div>
      </Container>
    </div>
  )
}

export default CreateInvoice
