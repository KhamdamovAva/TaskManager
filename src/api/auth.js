import axios from "axios";

// const API_URL = "ce1d-84-54-80-189.ngrok-free.app/api/auth";

export const signup = async (data) => {
  try {
    const response = await axios.post(
      `https://ce1d-84-54-80-189.ngrok-free.app/api/auth/signup/`,
      data,
      {
        headers: {
          "Content-Type": "application/json", // Указываем тип контента
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

// Функция для проверки OTP
export const verifyOtp = async (otpData) => {
  try {
    const response = await axios.post(
      `https://ce1d-84-54-80-189.ngrok-free.app/api/auth/verify-otp/`,
      otpData,
      {
        headers: {
          "Content-Type": "application/json", // Указываем тип контента
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

export const signin = async (data) => {
  try {
    const response = await axios.post(`https://ce1d-84-54-80-189.ngrok-free.app/api/auth/signin/`,
      data,
    {
      headers: {
        "Content-Type": "application/json",
      }
    })
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
}