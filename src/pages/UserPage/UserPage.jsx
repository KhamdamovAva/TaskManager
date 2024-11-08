import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Navigation from '../../components/navbar/Navigation'
import { useState } from 'react';
import Today from '../../components/Today/Today.jsx';
import Weekly from '../../components/Weekly/Weekly.jsx';
import Monthly from '../../components/Monthly/Monthly.jsx';

function UserPage() {
  const [activeTab, setActiveTab] = useState('today');

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
        <Sidebar setActiveTab={setActiveTab} />
        <div className='content'>
          {renderContent()}
        </div>
      </div>
    </div>

  )
}

export default UserPage
