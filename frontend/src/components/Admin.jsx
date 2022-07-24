import React from 'react'
import Navbar from './Navbar'
import HeatZone from './HeatZone'
import Tickets from './Tickets'
const Admin = () => {
  return (
    <>
      <Navbar />
      <div className='admin-container'>
        <HeatZone />
        <Tickets />
    </div>
    </>
  )
}

export default Admin;