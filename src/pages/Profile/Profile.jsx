import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Daily from '../../components/daily/Daily'

function Profile({ user }) {
  return (
    <section className='container borderLines rounded-[6px]'>
      <Navbar />

      <div className='flex'>
        <Sidebar user={user} />
        <Daily />
      </div>
    </section>
  )
}

export default Profile
