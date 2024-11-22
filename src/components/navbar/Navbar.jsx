import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/images/user_profile.svg"

function Navbar() {
  const btn = "bg-black text-white w-[150px] h-[40px] rounded-[5px] text-center p-[5px]";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Проверяем токен при загрузке компонента
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token); // Если токен есть, пользователь авторизован
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  }
  
  const handleLogoClick = () => {
    if (isAuthenticated) {
      navigate("/profile"); // Если авторизован, переход на страницу профиля
    } else {
      navigate("/"); // Если не авторизован, переход на главную страницу
    }
  };

  return (
    <nav className='flex justify-between items-center py-[10px] px-[50px] border border-[#ECE4E4]'>
      <h3 onClick={handleLogoClick} className='text-[24px] font-bold'><a href="/">🎯 Daily Tasks</a></h3>
      
      {isAuthenticated ? (
        // Кнопка User (можно сделать выпадающее меню для профиля)
        <div className='flex gap-[20px]'>
          <button onClick={handleLogout}>Logout</button>
          <img className='rounded-full border border-[#5200ff]' src={Image} alt="" />
        </div>
      ) : (
        // Кнопка Sign-in для неавторизованных пользователей
        <Link to={"/login"}>
          <Button className={btn}>Sign-in</Button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
