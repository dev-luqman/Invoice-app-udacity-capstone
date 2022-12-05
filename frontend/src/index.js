import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CustomerProvider } from './Components/Contexts/CustomerContext'
import { InvoiceProvider } from './Components/Contexts/InvoiceContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CustomerProvider>
      <InvoiceProvider>
        <App />
      </InvoiceProvider>
    </CustomerProvider>
  </React.StrictMode>,
)

reportWebVitals()
