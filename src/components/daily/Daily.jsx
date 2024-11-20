import React from 'react'

function Daily() {
  return (
    <>

      <div className='w-[76%] borderLines  '>
        <div className='bg-[#5200FF] text-white text-center p-[10px]'>
          <p>Today 22.04.2024</p>
        </div>
        <div className='flex justify-between px-[10px] py-[10px]'>
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>To do</h4>
              <button>+ add task</button>
            </div>
          </div>
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>To do</h4>
              <button>+ add task</button>
            </div>
          </div>
          <div>
            <div className='w-[235px] min-h-[90px] rounded-[10px] borderLines py-[5px] px-[10px]'>
              <h4 className='text-[20px] font-medium mb-[10px]'>To do</h4>
              <button>+ add task</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Daily
