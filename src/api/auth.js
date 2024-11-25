import axios from "axios";

const BASE_URL = "https://539b-84-54-83-231.ngrok-free.app/api/auth";

export const signup = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/signup/`,
      data,
      {
        headers: {
          "Content-Type": "application/json", // Указываем тип контента
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

// Функция для проверки OTP
export const verifyOtp = async (otpData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/verify-otp/`,
      otpData,
      {
        headers: {
          "Content-Type": "application/json", // Указываем тип контента
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Verify OTP Error:", error);
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

export const signin = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin/`,
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