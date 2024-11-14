import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Navigation from '../../components/navbar/Navigation';
import Today from '../../components/Today/Today.jsx';
import Weekly from '../../components/Weekly/Weekly.jsx';
import Monthly from '../../components/Monthly/Monthly.jsx';

function UserPage() {
  const [activeTab, setActiveTab] = useState('today');
  const [userData, setUserData] = useState({ email: '', name: '' });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData); // Загружаем данные из localStorage
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'today':
        return <Today />;
      case 'weekly':
        return <Weekly />;
      case 'monthly':
        return <Monthly />;
      default:
        return null;
    }
  };

  return (
    <div className='container w-[70%] border border-[#5200FF]'>
      <Navigation />
      <div className='flex w-full'>
        <Sidebar setActiveTab={setActiveTab} email={userData.email} name={userData.name} />
        <div className='borderLines'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default UserPage;