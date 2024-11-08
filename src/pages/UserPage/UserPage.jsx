import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Navigation from '../../components/navbar/Navigation'

function UserPage() {
  return (
    <div className='container w-[70%] border border-[#5200FF]'>
      <Navigation />
      <div className='flex w-full'>
        <Sidebar />
      </div>
    </div>

  )
}

export default UserPage
