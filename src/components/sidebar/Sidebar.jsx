import pofile from '../../assets/icons/profile_icon.svg'

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
          <li className='p-[6px] pl-[14px] border-t-[#5200FF] border-[1px]'>Today's challenges</li>
          <li className='p-[6px] pl-[14px] border-t-[#5200FF] border-[1px]'>Weekly Tasks</li>
          <li className='p-[6px] pl-[14px] border-t-[#5200FF] border-[1px]'>Monthly Tasks</li>
          <li className='p-[6px] pl-[14px] border-t-[#5200FF] border-[1px]'>+ add special day</li>
        </ul>
      </div>
    </>

  )
}

export default Sidebar
