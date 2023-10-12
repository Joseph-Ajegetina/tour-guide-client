import React from 'react'
import './LoadingSpinner.css'
import {Spinner} from 'react-bootstrap'

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <Spinner animation="grow" size="lg"/>
    </div>

  )
}

export default LoadingSpinner