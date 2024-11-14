import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainP from '../pages/mainPage/MainP';
import Register from '../pages/registerPage/Register';
import Login from '../pages/loginPage/Login';
import UserPage from '../pages/UserPage/UserPage';
import Message from '../pages/messagePage/Message';

function AppRouter({ onRegister }) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainP />} />
        <Route path='/register' element={<Register onRegister={onRegister} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<UserPage />} />
        <Route path='/Message' element={<Message />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
