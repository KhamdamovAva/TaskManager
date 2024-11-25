import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/Home/MainPage'
import SignUp from '../pages/Register/SignUp'
import Verify from '../pages/Register/Verify'
import SignIn from '../pages/Login/SignIn'
import Profile from '../pages/Profile/Profile'
import Weekly from '../components/weekly/Weekly'

function AppRouter() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Извлекаем данные пользователя из localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Устанавливаем пользователя в состояние
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/login' element={<SignIn setUser={setUser} />} />
      <Route path='/profile' element={<Profile user={user} />} />
      <Route path='/weekly' element={<Weekly />} />
    </Routes>
  )
}

export default AppRouter
