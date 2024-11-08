import pofile from '../../assets/icons/profile_icon.svg'

function Sidebar({ setActiveTab }) {
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
        <div className='mt-[30px] flex flex-col cursor-pointer'>
          <button onClick={() => setActiveTab('today')} className='p-[6px] pl-[14px] border-t-[#5200FF] text-start border-[1px]'>Today's challenges</button>
          <button onClick={() => setActiveTab('weekly')} className='p-[6px] pl-[14px] border-t-[#5200FF] text-start border-[1px]'>Weekly Tasks</button>
          <button onClick={() => setActiveTab('monthly')} className='p-[6px] pl-[14px] border-t-[#5200FF] text-start border-[1px]'>Monthly Tasks</button>
          <button className='p-[6px] pl-[14px] border-t-[#5200FF] text-start border-[1px]'>+ add special day</button>
        </div>
      </div>
    </>

  )
}

export default Sidebar
