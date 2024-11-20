import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function Profile() {
  return (
    <section className='container borderLines rounded-[6px]'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='w-[76%] borderLines'>
          Page
        </div>
      </div>
    </section>
  )
}

export default Profile
