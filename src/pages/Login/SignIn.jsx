import React, { useState } from 'react'
import Button from '../../components/buttons/Button';
import Navbar from '../../components/navbar/Navbar';
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const input = 'border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto text-black';
    const label = "text-[18px] font-semibold ml-[20px]";
    const btn = "cursor-pointer bg-black text-white w-[180px] h-[45px] rounded-[5px] text-center m-auto p-[10px]";

    //State
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
   

    //Functions

  return (
    <section className='container borderLine rounded-[6px]'>
            <Navbar />
            <div className='borderLine min-h-[90vh] grid place-items-center'>
                <form className='border-2 border-[#ECE4E4] w-[612px] min-h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col'>
                    <div className="mb-[20px]">
                        <h3 className='text-[30px] font-bold'>Sign In</h3>
                        <p className='pt-[10px] pb-[20px]'>Nice to meet you! Enter your details to login.</p>
                    </div>
                    {/* Email */}
                    <label className={label} htmlFor="email">Email</label>
                    <input className={input} name='email'  required type="email" id='email' placeholder='Email' />
                    {/* Password */}
                    <label className={label} htmlFor="password">Password</label>
                    <input className={input} name='password' required type="password" id='password' placeholder='Password' />
                    
                    {/* Error Message */}
                    {message && <p style={{ color: "green" }}>{message}</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <div className='m-auto my-[20px]'>
                        <Button className={btn} type='submit' disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Sign-in'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default SignIn