import axios from "axios";

// const API_URL = "ce1d-84-54-80-189.ngrok-free.app/api/auth";

export const signup = async (data) => {
  console.log("API Request Data:", data);

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
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

// Функция для проверки OTP
export const verifyOtp = async (otpData) => {
  console.log("Sending OTP Data:", otpData);

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
    console.log("Server Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

export const signin =async (data) => {
  console.log(data);

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
    console.error("Sign-in API Error:", error.response || error.message);
    throw error.response ? error.response.data : { message: "Network error" };
  }
}