import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/auth';

function Register() {
    const input = 'border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto text-black';
    const label = "text-[18px] font-semibold ml-[20px]";
    const btn = "cursor-pointer bg-black text-white w-[180px] h-[45px] rounded-[5px] text-center m-auto p-[10px]";

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setErrorMessage("Введите корректный адрес электронной почты.");
            return;
        }

        setIsLoading(true);
        setErrorMessage(""); // Clear previous error messages

        try {
            const response = await register({ username, email, password }); // Send as an object
            localStorage.setItem('registeredEmail', email);
            console.log("Ответ от сервера:", response);
            navigate("/register-confirm"); // Передаем email через state
        } catch (error) {
            console.error("Ошибка регистрации:", error);
            if (error.response) {
                console.error("Ответ от сервера:", error.response);
                setErrorMessage("Ошибка регистрации. Попробуйте снова.");
            } else if (error.request) {
                console.error("Запрос не был выполнен:", error.request);
                setErrorMessage("Ошибка соединения. Попробуйте позже.");
            } else {
                console.error("Ошибка в настройке запроса:", error.message);
                setErrorMessage("Ошибка при обработке запроса.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='container borderLine rounded-[6px]'>
            <Navbar />
            <div className='borderLine min-h-[90vh] grid place-items-center'>
                <form onSubmit={handleSubmit} className='border-2 border-[#ECE4E4] w-[612px] min-h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col'>
                    <div className="mb-[20px]">
                        <h3 className='text-[30px] font-bold'>Sign Up</h3>
                        <p className='pt-[10px] pb-[20px]'>Nice to meet you! Enter your details to register.</p>
                    </div>
                    {/* Username */}
                    <label className={label} htmlFor="username">Username</label>
                    <input className={input} value={username} onChange={(e) => setUsername(e.target.value)} required type="text" id='username' placeholder='Username' />
                    {/* Email */}
                    <label className={label} htmlFor="email">Email</label>
                    <input className={input} value={email} onChange={(e) => setEmail(e.target.value)} required type="email" id='email' placeholder='Email' />
                    {/* Password */}
                    <label className={label} htmlFor="password">Password</label>
                    <input className={input} value={password} onChange={(e) => setPassword(e.target.value)} required type="password" id='password' placeholder='Password' />
                    
                    {/* Error Message */}
                    {errorMessage && <p className="text-red-500 mt-[10px]">{errorMessage}</p>}

                    <div className='m-auto my-[20px]'>
                        <Button className={btn} type='submit' disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Sign-up'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;
