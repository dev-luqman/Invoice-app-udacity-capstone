import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="d-flex justify-content-around align-items-center pt-4">
      <div className="text-center pt-4">
        <p className="badge text-bg-danger m-2">Page not found</p>
        <div>
          <button
            className="btn btn-primary btn-sm px-5 fw-bold"
            onClick={() => navigate('/')}
          >
            Go Home{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
