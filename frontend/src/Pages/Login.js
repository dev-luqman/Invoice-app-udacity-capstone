import { useContext, useState, useEffect } from 'react'
import AuthContext from '../Components/Contexts/AuthContext'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const {
    loginHandler,
    account: { loading, isAuth, user },
  } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = { email, password }
    loginHandler(payload)
  }

  return (
    <Container className="pt-5 vh-100">
      <div className="bg-white rounded m-2 p-4" style={{ minHeight: '100px' }}>
        <Row className="justify-content-around">
          <Col xs={5} md={5} className="bg-light border rounded p-4">
            <h2 className="text-center mb-4"> Login</h2>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Login
