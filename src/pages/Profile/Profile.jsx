import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Daily from '../../components/daily/Daily';
import Weekly from '../../components/weekly/Weekly';
import Monthly from '../../components/weekly/Weekly';

function Profile({ user }) {
  const [selectedTab, setSelectedTab] = useState('daily'); // Состояние для выбранной вкладки

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

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
