import pofile from '../../assets/icons/profile_icon.svg'
import { sidebarProfile } from './sidebar.js';

function Sidebar() {
  return (
    <>
      <div className='max-w-[30%] h-[90vh] border-[#5200FF] border-[1px] pt-[40px] '>
        <div className='flex space-x-[12px] ml-[14px] pr-[20px]'>
          <img src={pofile} alt="Profile Image" />
          <div>
            <h3 className='text-[18px]'>User Name</h3>
            <p className='text-[10px]'>example@gmail.com</p>
          </div>
        </div>
        <ul className='mt-[30px] cursor-pointer'>
          {sidebarProfile.map((item) => (
            <div key={item.id} >
              <li className='border-t-[1px] border-[#5200FF] pl-[14px]' > {item.title}</li>
            </div>
          ))}
        </ul >
      </div >
    </>

  )
}

export default Sidebar
