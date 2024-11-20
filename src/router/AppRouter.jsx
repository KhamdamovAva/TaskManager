import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/Home/MainPage'
import Register from '../pages/Register/Register'
import RegisterConfirm from '../pages/Register/RegisterConfirm'
import Login from '../pages/Login/Login'

function AppRouter() {
  return (
      <Routes>
        <Route path='/' element={<MainPage /> }/>
        <Route path='/signup' element={<Register />}/>
        <Route path='/register-confirm' element={<RegisterConfirm />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
  )
}

export default AppRouter