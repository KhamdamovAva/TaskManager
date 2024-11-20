import React from 'react'
import profile from '../../assets/images/user_profile.svg';
import '../../assets/style.css'

function Sidebar() {
  return (
    <div className='w-[24%] min-h-[89vh] borderLines'>
       <div className='flex items-center py-[40px] px-[10px] space-x-[10px] border-b-[2px] border-[#5200FF]'>
          <img src={profile} alt="img"  />
          <div>
              <h3 className='font-medium text-[18px]'>User Name</h3>
              <p className='font-[275]'>example@gmail.com</p>
          </div>
       </div>
       <div>
          <button className='w-[100%] text-start px-[10px] py-[5px] border-b-[2px] border-[#5200FF] text-white  bg-[#5200FF]'>Today's challenges</button>
          <button className='w-[100%] text-start px-[10px] py-[5px] border-b-[2px] border-[#5200FF]'>Weekly Tasks</button>
          <button className='w-[100%] text-start px-[10px] py-[5px] border-b-[2px] border-[#5200FF]'>Monthly Tasks</button>
          <button className='w-[100%] text-start px-[10px] py-[5px] border-b-[2px] border-[#5200FF]'>+ add special day</button>
       </div>
    </div>
  )
}

export default Sidebar
