import React, { useState } from 'react'
import Button from '../../components/buttons/Button';
import Navbar from '../../components/navbar/Navbar';
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const input = 'border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto text-black';
    const label = "text-[18px] font-semibold ml-[20px]";
    const btn = "cursor-pointer bg-black text-white w-[180px] h-[45px] rounded-[5px] text-center m-auto p-[10px]";

    //State
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const data = {
        username,
        email,
        password,
    };
    console.log(data);

    //Functions
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(data);
            setMessage(response.message || "Signup successful! Please check your email for the OTP.");
            setError("");
            setIsLoading(true);
            navigate("/verify", {state: {email: data.email}});
        } catch (e) {
            console.error("Signup failed:", e);
            setError(e.message || "An error occurred during signup.");
            setMessage("");
        } finally {
            setIsLoading(false);
        }
    }
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
                    <input className={input} name='username' value={username} onChange={handleUsernameChange} required type="text" id='username' placeholder='Username' />
                    {/* Email */}
                    <label className={label} htmlFor="email">Email</label>
                    <input className={input} name='email' value={email} onChange={handleEmailChange} required type="email" id='email' placeholder='Email' />
                    {/* Password */}
                    <label className={label} htmlFor="password">Password</label>
                    <input className={input} name='password' value={password} onChange={handlePasswordChange} required type="password" id='password' placeholder='Password' />
                    
                    {/* Error Message */}
                    {message && <p style={{ color: "green" }}>{message}</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <div className='m-auto my-[20px]'>
                        <Button className={btn} type='submit' disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Sign-up'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default SignUp