import React from 'react'
import AccountProgress from './Subcomponents/AccountProgress'
import TotalOnboarding from './Subcomponents/TotalOnboarding'
import FeedBack from './Subcomponents/FeedBack'

const UpperPage = () => {
  return (
    <div className="min-h-[85vh] sm:flex  gap-4 p-4">
       <AccountProgress/>
        <TotalOnboarding/>
        <FeedBack/>
    </div>
  )
}

export default UpperPage