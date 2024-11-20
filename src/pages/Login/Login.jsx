import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/buttons/Button';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const input ='border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto text-black'
    const label = "text-[18px] font-semibold ml-[20px]";
    const btn = "cursor-pointer bg-black text-white w-[180px] h-[45px] rounded-[5px] text-center m-auto p-[10px]"
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await login({ username, password });
          navigate("/");
          console.log("Успешный вход:", response.data);
        } catch (error) {
          console.error("Ошибка входа:", error);
          alert("Ошибка входа. Попробуйте снова.");
        }
    };

  return (
    <>
        <section className='container borderLine rounded-[6px]'>
            <Navbar />
                <div className='borderLine min-h-[90vh] grid place-items-center'>
                    <form onSubmit={handleSubmit} className='border-2 border-[#ECE4E4] w-[612px] min-h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col'>
                        <div className="mb-[20px]">
                            <h3 className="text-[30px] font-bold">Sign in</h3>
                            <p className="pt-[10px] pb-[20px]">Nice to meet you! Enter your email to login.</p>
                        </div>
                        {/* Username */}
                        <label className={label} htmlFor="username">Username</label>
                        <input className={input} value={username} onChange={(e) => setUsername(e.target.value)} required type="text" id='username' placeholder='Username'/>
                        {/* Password */}
                        <label className={label} htmlFor="password">Password</label>
                        <input className={input} value={password} onChange={(e) => setPassword(e.target.value)} required type="password" id='password' placeholder='Password'/>
                        <div className='m-auto my-[20px]'>
                            <Button className={btn} type='submit' >Sign-in</Button>
                        </div>
                    </form>
                </div>
        </section>  
    </>
  )
}

export default Login