import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from './Pages/Homepage/index'
import AuthContext from './Components/Contexts/AuthContext'
import CreateInvoice from './Pages/CreateInvoice'
import NotFound from './Pages/NotFound'

const App = () => {
  const { account, loadUserHandler } = useContext(AuthContext)

  useEffect(() => {
    loadUserHandler()
  }, [])
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create_invoice" element={<CreateInvoice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
