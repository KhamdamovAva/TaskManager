import Navigation from '../../components/navbar/Navigation'
import MainButton from '../../components/MainBlackBtn/MainButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = { name, email };
    onRegister(userData); // Вызываем функцию onRegister
    
    // Сохраняем данные в localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Переходим на страницу профиля
    navigate('/profile');
  };

  return (
    <>
      <section className='container borderLine rounded-[6px]'>
        <Navigation />
        <div className='borderLine h-[91.3vh] grid place-items-center  '>
          <form onSubmit={handleSubmit} action="#" className='border-2 border-[#ECE4E4] w-[612px] min-h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col'>
            <div className="mb-[20px]">
              <h3 className='text-[30px] font-bold'>Sign Up</h3>
              <p className='pt-[10px] pb-[20px]'>Nice to meet you! Enter your details to register.</p>
            </div>
            <label htmlFor="name" className='text-[18px] font-semibold ml-[20px]' >Your Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' className='border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto' />
            <label htmlFor="email" className='text-[18px] font-semibold ml-[20px]' >Your Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' className='border border-[#ECE4E4] p-[10px] rounded-[6px] mt-[10px] mb-[20px] m-auto h-[55px] w-[530px]' />
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
