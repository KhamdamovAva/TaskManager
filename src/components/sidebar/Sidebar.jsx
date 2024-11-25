import React from 'react';
import { useState } from 'react';  // Импортируем useState
import profile from '../../assets/images/user_profile.svg';
import '../../assets/style.css';

function Sidebar({ user, onSelectTab }) {
   const emailWithoutDomain = user ? user.email.replace('@gmail.com', '') : '';
   const [activeButton, setActiveButton] = useState('daily');  // Состояние для активной кнопки

   // Обработчик нажатия на кнопку
   const handleButtonClick = (tab) => {
      setActiveButton(tab);
      onSelectTab(tab);  // Передаем выбранную вкладку в Profile
   };


   return (
      <div className='w-[30%] min-h-[89vh] borderLines'>
         <div className='flex items-center py-[40px] px-[10px] space-x-[10px] border-b-[2px] border-[#5200FF]'>
            <img src={profile} alt="img" />
            <div>
               <p className='font-bold font-sans'>Your Email:</p>
               <p className='font-medium m-auto w-[120px] break-words'>{emailWithoutDomain}</p>
            </div>
         </div>
         <div>
            <button
               className={`w-full text-start px-[10px] py-[5px] border-b-[2px] border-[#5200FF] text-black ${activeButton === 'daily' ? 'bg-[#5200FF] text-white' : ''}`}
               onClick={() => handleButtonClick('daily')}
            >
               Today's challenges
            </button>
            <button
               className={`w-full text-start px-[10px] py-[5px] border-b-[2px] border-[#5200FF] text-black ${activeButton === 'weekly' ? 'bg-[#5200FF] text-white' : ''}`}
               onClick={() => handleButtonClick('weekly')}
            >
               Weekly Tasks
            </button>
            <button
               className={`w-full text-start px-[10px] py-[5px] border-b-[2px] border-[#5200FF] text-black ${activeButton === 'monthly' ? 'bg-[#5200FF] text-white' : ''}`}
               onClick={() => handleButtonClick('monthly')}
            >
               Monthly Tasks
            </button>
         </div>
      </div>
   )
}

export default Sidebar;
