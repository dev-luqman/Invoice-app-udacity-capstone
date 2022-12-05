import { useContext, useEffect } from 'react'
import AuthContext from '../Components/Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const {
    logoutHandler,
    account: { isAuth },
  } = useContext(AuthContext)

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth, navigate])

  if (!isAuth) {
    navigate('login')
  }

  return (
    <div className="position-relative">
      <div className="sticky-top ">
        <button
          className="btn btn-danger btn-sm  position-absolute "
          style={{ top: '30px', right: '30px' }}
          onClick={() => logoutHandler()}
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  )
}

export default ProtectedRoute
