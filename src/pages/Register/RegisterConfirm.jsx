import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/buttons/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { confirmRegistration } from '../../api/auth';

function RegisterConfirm() {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    // const location = useLocation();

    const input = 'border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto text-black';
    const label = "text-[18px] font-semibold ml-[20px]";
    const btn = "cursor-pointer bg-black text-white w-[180px] h-[45px] rounded-[5px] text-center m-auto p-[10px]";

    // Автозаполнение email из state
    useEffect(() => {
        const savedEmail = localStorage.getItem('registeredEmail');
        if (savedEmail) {
            setEmail(savedEmail);
        } else {
            setErrorMessage("Email для подтверждения не найден.");
        }
    }, []);
    

    const handleConfirm = async (e) => {
        e.preventDefault();
        // Очистка ошибок
        setErrorMessage('');
        // Проверка формата OTP
        if (!/^\d{6}$/.test(otp)) {
          setErrorMessage("OTP должен состоять из 6 цифр.");
          return;
        }
        try {
          console.log("Отправляем данные для подтверждения:", { email, otp });
          // Вызов API
          const response = await confirmRegistration({ email, otp });
          console.log('Успешное подтверждение:', response);
          // Переход на страницу входа
          navigate("/login");
        } catch (error) {
          console.log(`Email при отправке: ${typeof email} ${email}`);
          console.error("Ошибка при подтверждении:", error);
          if (error.response) {
            console.error("Детали ошибки от сервера:", error.response.data);
            setErrorMessage(
                error.response?.data?.non_field_errors?.[0] ||
                error.response?.data?.message ||
                "Ошибка подтверждения. Попробуйте снова."
            );
          } else {
            setErrorMessage("Ошибка соединения. Попробуйте позже.");
          }
        }
      };

    return (
        <section className='container borderLine rounded-[6px]'>
            <Navbar />
            <div className='borderLine min-h-[90vh] grid place-items-center'>
                <form onSubmit={handleConfirm} className='border-2 border-[#ECE4E4] w-[612px] min-h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col'>
                    <div className="mb-[20px]">
                        <h3 className='text-[30px] font-bold'>Confirm Your Account</h3>
                        <p className='pt-[10px] pb-[20px]'>Please enter the OTP sent to your email.</p>
                    </div>
                    {/* Email (Read-only) */}
                    <label className={label} htmlFor="email">Email</label>
                    <input
                        className={`${input} bg-gray-100`}
                        value={email}
                        readOnly
                        type="text"
                        id='email'
                        placeholder='Enter Email'
                    />
                    {/* OTP */}
                    <label className={label} htmlFor="otp">OTP</label>
                    <input
                        className={input}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                        type="text"
                        id='otp'
                        placeholder='Enter OTP'
                    />
                    {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                    <div className='m-auto my-[20px]'>
                        <Button className={btn} type='submit'>Confirm</Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterConfirm;
