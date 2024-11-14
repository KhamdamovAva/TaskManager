import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/buttons/MainButton'
import Navigation from '../../components/navbar/Navigation'

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверка email в localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email) {
      // Если email найден, перенаправляем на страницу профиля
      navigate('/profile');
    } else {
      // Если email неверный, выводим ошибку
      setError('Invalid email. Please check your email address.');
    }
  };

  return (
    <>
      <section className='container borderLine rounded-[6px]'>
        <Navigation />
        <div className='borderLine h-[91.3vh] grid place-items-center'>
          <form className='borderLine w-[612px] h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col' onSubmit={handleSubmit}>
            <h3 className='text-[30px] font-bold'>Sign in</h3>
            <p className='pt-[10px] pb-[20px]'>Nice to meet you! Enter your email to login.</p>
            <label className='ml-[30px] text-[18px] font-medium' htmlFor='email'>Your Email</label>
            <input
              className='mt-[20px] mb-[30px] border border-[#ECE4E4] h-[55px] w-[530px] p-[10px] m-auto rounded-[6px]'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className="m-auto">
              <MainButton type="submit">Sign-in</MainButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
