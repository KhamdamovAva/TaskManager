import AppRouter from './router/AppRouter';
import "./components/container/Container.css";
import './assets/css/borderStyle.css';

function App() {
  const handleRegister = (userData) => {
    // Дополнительная логика обработки данных регистрации, если нужно
    console.log("Registered User:", userData);
  };

  return (
    <AppRouter onRegister={handleRegister} />
  );
}

export default App;
