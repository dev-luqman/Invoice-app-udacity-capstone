import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import AuthContext from '../../Components/Contexts/AuthContext'
import InvoiceTab from '../InvoiceTab'
import CustomerTab from '../CustomerTab'

import logo from '../../assets/images/logo-invoice.jpg'
import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router'

const Index = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null)
  // const {
  //   account: { user, token },
  // } = useContext(AuthContext)

  return (
    <div>
      <header className="bg-light shadow-lg p-3">
        <Nav
          defaultActiveKey="/"
          as="ul"
          className="d-flex align-items-center justify-content-between"
        >
          <Nav.Item as="li">
            <img src={logo} height="50" width="auto" />
          </Nav.Item>
          <Nav.Item as="li">
            <button
              className="btn btn-primary fw-bold"
              onClick={() => navigate('create_invoice')}
            >
              {' '}
              Create Invoice
            </button>
          </Nav.Item>
        </Nav>
      </header>
      <Container className="mt-4">
        <h2 className="fw-bold text-secondary mb-4">
          {' '}
          <span className="text-warning"> Pay-Out</span> Invoice{' '}
        </h2>

        <Tabs
          defaultActiveKey="invoice"
          id="uncontrolled-tab-example"
          className="my-3"
        >
          <Tab eventKey="invoice" title="Invoice" tabClassName="fw-bold">
            <div className="p-4 card">
              <InvoiceTab />{' '}
            </div>
          </Tab>
          <Tab eventKey="customer" title="Customer" tabClassName="fw-bold">
            <div className="p-4 card">
              <CustomerTab />{' '}
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default Index
