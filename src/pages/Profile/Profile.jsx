import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Daily from '../../components/daily/Daily';
import Weekly from '../../components/weekly/Weekly';
import Monthly from '../../components/monthly/Monthly';

function Profile({ user }) {
  const [selectedTab, setSelectedTab] = useState(() => {
    // Получение сохранённого значения из localStorage
    return localStorage.getItem('selectedTab') || 'daily'; // По умолчанию вкладка "daily"
  });

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab); // Сохранение выбранной вкладки в localStorage
  };

  useEffect(() => {
    // Сохраняем вкладку при изменении selectedTab
    localStorage.setItem('selectedTab', selectedTab);
  }, [selectedTab]);

  return (
    <section className="container borderLines rounded-[6px]">
      <Navbar />
      <div className="flex">
        <Sidebar user={user} onSelectTab={handleSelectTab} />
        <div className="w-full min-h-full">
          {selectedTab === 'daily' && <Daily />}
          {selectedTab === 'weekly' && <Weekly />}
          {selectedTab === 'monthly' && <Monthly />}
        </div>
      </div>
    </section>
  );
}

export default Profile;
