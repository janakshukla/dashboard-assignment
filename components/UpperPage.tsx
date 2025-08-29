import React from 'react'
import AccountProgress from './Subcomponents/AccountProgress'
import TotalOnboarding from './Subcomponents/TotalOnboarding'
import FeedBack from './Subcomponents/FeedBack'

const UpperPage = () => {
  return (
    <div className="min-h-[85vh] flex flex-col md:flex-row  gap-4 p-4">
       <AccountProgress/>
        <TotalOnboarding/>
        <FeedBack/>
    </div>
  )
}

export default UpperPage