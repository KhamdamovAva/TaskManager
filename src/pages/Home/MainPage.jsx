import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/buttons/Button'
import { Link } from 'react-router-dom';

function MainPage() {
  const btn = "bg-black text-white w-[180px] h-[45px] rounded-[5px] text-center m-auto p-[10px]";

  return (
    <>
    <header className='container borderLine rounded-[6px]'>
      <Navbar />
        <div className='pt-[240px] borderLine w-[100%] min-h-[90vh] text-center' >
          <div className='m-auto w-[770px]' >
            <h1 className='font-bold text-[60px]'>Daily Tasks</h1>
            <p className='my-[20px] font-medium text-[20px]'>
              After a stroke, it can take time to figure out how to do the tasks that make up daily life.
              Here are some tips. Find useful services and connect with others living with heart disease or stroke.
            </p>
            <Link to={"/signup"}>
              <Button className={btn}>Get-started</Button>
            </Link>
          </div>
        </div>
    </header> 
    </>
  )
}

export default MainPage