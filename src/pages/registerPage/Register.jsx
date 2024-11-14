import MainButton from '../../components/buttons/MainButton'
import Navigation from '../../components/navbar/Navigation'


function Register() {


  return (
    <>
      <section className='container borderLine rounded-[6px]'>
        <Navigation />
        <div className='borderLine h-[91.3vh] grid place-items-center  '>
          <form action="#" className='border-2 border-[#ECE4E4] w-[612px] min-h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col'>
            <div className="mb-[20px]">
              <h3 className='text-[30px] font-bold'>Sign Up</h3>
              <p className='pt-[10px] pb-[20px]'>Nice to meet you! Enter your details to register.</p>
            </div>
            <label htmlFor="name" className='text-[18px] font-semibold ml-[20px]' >UserName</label>
            <input type="text" id='name' className='border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto' />
            <label htmlFor="email" className='text-[18px] font-semibold ml-[20px]' >Email</label>
            <input type="email" id='email' className='border border-[#ECE4E4] p-[10px] rounded-[6px] mt-[10px] mb-[20px] m-auto h-[55px] w-[530px]' />
            <label htmlFor="password" className='text-[18px] font-semibold ml-[20px]' >Password</label>
            <input type="password" id='password' className='border border-[#ECE4E4] p-[10px] rounded-[6px] mt-[10px] mb-[20px] m-auto h-[55px] w-[530px]' />

            <div className="m-auto my-[20px]">
              <MainButton type="submit">Sign-up</MainButton>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
