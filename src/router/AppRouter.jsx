import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainP from '../pages/mainPage/MainP'
import Register from '../pages/registerPage/Register'
import Login from '../pages/loginPage/Login'
import UserPage from '../pages/UserPage/UserPage'
import Weekly from '../pages/weeklyPage/Weekly'
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainP />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/profile' element={<UserPage />} ></Route>
        <Route path='/weekly' element={<Weekly />} ></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
