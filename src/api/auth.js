import axios from "axios";

// Базовый URL для API
const API_URL = "http://95.130.227.110:8000/api/auth";

// Регистрация пользователя
export const register = async (data) => {
  console.log("Отправляемые данные:", data); // Для проверки, что отправляется
  return axios.post('http://95.130.227.110:8000/api/auth/signup/', data); // отправляем объект
};


// Подтверждение аккаунта
export const confirmRegistration = async (data) => {
  // Проверяем корректность данных перед запросом
  if (!data.email || !data.otp) {
    console.error("Ошибка: Email или OTP отсутствует.");
    throw new Error("Необходимо указать Email и OTP.");
  }
  
  // Печатаем данные перед отправкой
  console.log("Отправляем запрос подтверждения:", data);
  
  try {
    const response = await axios.post(
      'http://95.130.227.110:8000/api/auth/register/confirm/',
      { email: String(data.email), otp: String(data.otp) },  // Убедитесь, что передаете email и otp как строки
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log("Успешный ответ от сервера:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка подтверждения регистрации:", error.response?.data || error.message);

    if (error.response?.data) {
      throw new Error(error.response.data.non_field_errors?.[0] || "Ошибка подтверждения.");
    }

    throw error;
  }
};

// Вход в систему
export const login = async (credentials) => {
  return axios.post(`http://95.130.227.110:8000/api/auth/login/`, credentials);
};

export const refreshToken = (refreshToken) => {
  return axios.post(`http://95.130.227.110:8000/api/auth/token/refresh/`, { refresh: refreshToken });
};