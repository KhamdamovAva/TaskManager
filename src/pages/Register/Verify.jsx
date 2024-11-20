import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyOtp } from '../../api/auth';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/buttons/Button';

function Verify() {
    const input = 'border border-[#ECE4E4] p-[10px] rounded-[6px] h-[55px] w-[530px] mt-[10px] mb-[20px] m-auto text-black';
    const label = "text-[18px] font-semibold ml-[20px]";
    const btn = "cursor-pointer bg-black text-white w-[180px] h-[45px] rounded-[5px] text-center m-auto p-[10px]";

    //Utilies
    const location = useLocation();
    const navigate = useNavigate();

    //States
    const email = location.state?.email || "";

    const [isLoading, setIsLoading] = useState(false);
    const [otp_code, setOtp_code] = useState('');
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const trimmedOtp = otp_code.trim();
    const otpData = {
      email,
      otp_code: trimmedOtp,
    };

    console.log("OTP Data:", otpData);

    //Functions
    const handleOtpChange = (e) => {
      setOtp_code(e.target.value);
    }

    const handleVerify = async (e) => {
      e.preventDefault();

      try {
        const response = await verifyOtp(otpData);
        console.log("Verification Successful:", response);
        setMessage(response.message || "Verification successful!");
        setError("");
        setIsLoading(true);
        navigate("/login");
      } catch (e) {
        setError(e.message || "Verification failed. Please try again.");
        setMessage("");
      } finally {
        setIsLoading(false);
      }
    }
  return (
    <section className='container borderLine rounded-[6px]'>
            <Navbar />
            <div className='borderLine min-h-[90vh] grid place-items-center'>
                {email ? (
                  <>
                      <form onSubmit={handleVerify} className='border-2 border-[#ECE4E4] w-[612px] min-h-[354px] p-[20px] rounded-[12px] m-auto flex flex-col'>
                          <div className="mb-[20px]">
                              <h3 className='text-[30px] font-bold'>Verify your account</h3>
                              <p>Email: <strong>{email}</strong></p>
                          </div>
                          {/* Otp */}
                          <label className={label} htmlFor="otp">Otp</label>
                          <input className={input} name='otp' value={otp_code} onChange={handleOtpChange} required type="text" id='password' placeholder='Password' />
                          
                          {/* Error Message */}
                          {message && <p style={{ color: "green" }}>{message}</p>}
                          {error && <p style={{ color: "red" }}>{error}</p>}

                          <div className='m-auto my-[20px]'>
                              <Button className={btn} type='submit' disabled={isLoading}>
                                  {isLoading ? 'Loading...' : 'Sign-up'}
                              </Button>
                          </div>
                      </form>
                  </>
                ) : (
                  <p style={{ color: "red" }}>
                    No email provided. Please go back to the signup page.
                  </p>
                )}
            </div>
        </section>
  )
}

export default Verify