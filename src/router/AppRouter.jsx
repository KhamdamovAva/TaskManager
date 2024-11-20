import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/Home/MainPage'
import SignUp from '../pages/Register/SignUp'
import Verify from '../pages/Register/Verify'
import SignIn from '../pages/Login/SignIn'
import Profile from '../pages/Profile/Profile'

function AppRouter() {
  return (
      <Routes>
        <Route path='/' element={<MainPage /> }/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/verify' element={<Verify />}/>
        <Route path='/login' element={<SignIn />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
  )
}

export default AppRouter
