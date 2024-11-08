import Navigation from '../../components/navbar/Navigation'
import MainButton from '../../components/MainBlackBtn/MainButton'
import { Link } from 'react-router-dom'

function MainP() {
  return (
    <>
      <header className='container borderLine rounded-[6px] '>
        <Navigation />
        <div className='pt-[240px] borderLine w-[100%] h-[90vh] text-center'>
          <div className='m-auto w-[770px]'>
            <h1 className='font-bold text-[60px]'>Daily Tasks</h1>
            <p className='my-[20px]  font-medium text-[20px]'>After a stroke, it can take time to figure out how to do the tasks that make up daily life. Here are some tips. Find useful services and connect with others living with heart disease or stroke.</p>
            <Link to='/register'>
              <MainButton>Get-started</MainButton>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default MainP
