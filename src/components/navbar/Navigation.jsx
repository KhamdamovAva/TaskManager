import { Link } from 'react-router-dom'
import TopBtn from '../buttons/TopBtn'
function Navigation() {
  return (
    <>
      <nav className='flex justify-between items-center  p-[10px] rounded-[6px]'>
        <h3 className='text-[24px] font-bold'><a href="/">🎯 Daily Tasks</a></h3>
        <Link to="/login">
          <TopBtn>Sign-in</TopBtn>
        </Link>
      </nav>
    </>


  )
}

export default Navigation
