import { createContext, useState } from 'react'
import {
  LoginService,
  LoadUserServer,
  GetChatToken,
} from '../../services/authService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [account, setAccount] = useState({
    isAuth: null,
    loading: false,
    error: null,
    token: null,
  })

  const logoutHandler = () => {
    localStorage.removeItem('rydeChatToken')
    localStorage.removeItem('ChatToken')
    setAccount((preState) => {
      return {
        ...preState,
        isAuth: false,
        loading: false,
        error: null,
        token: null,
      }
    })
  }

  const getChatTokenHandler = () => {
    GetChatToken()
      .then((res) => {
        setAccount((preState) => {
          return {
            ...preState,
            isAuth: true,
            token: res.data.result.accessToken,
          }
        })
        localStorage.setItem(
          'ChatToken',
          JSON.stringify(res.data.result.accessToken),
        )
      })
      .catch((err) => {
        setAccount((preState) => {
          return {
            ...preState,
            loading: false,
            error: 'error found',
          }
        })
      })
  }

  const loginHandler = (payload, navigate) => {
    setAccount((preState) => {
      return {
        ...preState,
        loading: false,
      }
    })
    LoginService(payload)
      .then((res) => {
        localStorage.setItem('rydeChatToken', JSON.stringify(res.data.result))
        loadUserHandler()
      })
      .catch((err) => {
        setAccount((preState) => {
          return {
            ...preState,
            isAuth: false,
            loading: false,
          }
        })
      })

    setAccount((preState) => {
      return {
        ...preState,
        isAuth: false,
        loadin: false,
      }
    })
  }

  const loadUserHandler = () => {
    setAccount((preState) => {
      return {
        ...preState,
        loading: true,
      }
    })
    LoadUserServer()
      .then((res) => {
        const user = { ...res.data.result }
        setAccount((preState) => {
          return {
            ...preState,
            // isAuth: true,
            loading: false,
            user: user,
          }
        })
      })
      .then((response) => {
        getChatTokenHandler()
      })
      .catch((error) => {
        setAccount((preState) => {
          return {
            ...preState,
            isAuth: false,
            loading: false,
          }
        })
      })
  }
  return (
    <AuthContext.Provider
      value={{ account, loginHandler, loadUserHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
