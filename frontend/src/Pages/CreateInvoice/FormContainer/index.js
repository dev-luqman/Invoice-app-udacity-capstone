import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import CustomerCard from './CustomerCard'
import ItemsCard from './ItemsCard'
import SummaryCard from './SummaryCard'

const FormConatiner = () => {
  const [progressLabel, setProgressLabel] = useState('Pick Customer')
  const [progressValue, setProgressValue] = useState(33)
  return (
    <div>
      <div classNamme="mb-2">
        <ProgressBar now={progressValue} label={`${progressLabel}`} />
      </div>
      <div>
        <CustomerCard />
        <ItemsCard />
        <SummaryCard />
      </div>
    </div>
  )
}

export default FormConatiner
