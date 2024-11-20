import React from 'react'
import Button from '../buttons/Button'
import { Link } from "react-router-dom"

function Navbar() {
  const btn = "bg-black text-white w-[150px] h-[40px] rounded-[5px] text-center p-[5px]"
  
  return (
    <nav className='flex justify-between items-center py-[10px] px-[50px] border border-[#ECE4E4]' >
        <h3 className='text-[24px] font-bold' ><a href="/">🎯 Daily Tasks</a></h3>
        <Link to={"/login"}>
          <Button className={btn}>Sign-in</Button>
        </Link>
    </nav>
  )
}

export default Navbar