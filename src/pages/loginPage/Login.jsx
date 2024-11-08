import MainButton from '../../components/MainBlackBtn/MainButton'
import Navigation from '../../components/navbar/Navigation'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <section className='container borderLine rounded-[6px]'>
        <Navigation />
        <div className='borderLine h-[91.3vh] grid place-items-center '>
            <form className='borderLine w-[612px] h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col' action="#">
                <h3 className='text-[30px] font-bold'>Sign in</h3>
                <p className='pt-[10px] pb-[20px]'>Nice to meet you! Enter your email to login.</p>
                <label className='ml-[30px] text-[18px] font-medium' htmlFor='email'>Your Email</label>
                <input className='mt-[20px] mb-[30px] border border-[#ECE4E4] h-[55px] w-[530px] p-[10px] m-auto rounded-[6px]' type="email" name="#" id="email" />
                <div className="m-auto">
                  <Link to="/profile">
                  <MainButton>Sign-in</MainButton>
                  </Link>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login
