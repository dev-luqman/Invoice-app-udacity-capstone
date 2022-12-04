import React, { useState, useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import AuthContext from '../../Components/Contexts/AuthContext'
import logo from '../../assets/images/logo-invoice.jpg'
import { Container } from 'react-bootstrap'

const Index = () => {
  const [userInfo, setUserInfo] = useState(null)
  const {
    account: { user, token },
  } = useContext(AuthContext)

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
            <button className="btn btn-primary fw-bold"> Create Invoice</button>
          </Nav.Item>
        </Nav>
      </header>
      <Container className="mt-4">
        <h2 className="fw-bold text-secondary">
          {' '}
          <span className="text-warning"> Pay-Out</span> Invoice{' '}
        </h2>
      </Container>
    </div>
  )
}

export default Index
