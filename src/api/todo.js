import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/todos/";

export const createTodo = async (todo) => {
    try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.post((API_URL), todo,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data
    } catch (error) {
        console.error("Full error details:", error.response ? error.response.data : error);
        throw error.response ? error.response.data : { message: "Network error" };
    }
}

export const getTodos = async () => {
    try {
        const token = localStorage.getItem("accessToken"); // Замените на ваш метод получения токена
        const response = await axios.get(`${API_URL}?filter=daily`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Сервер вернул ответ, но он не соответствует ожиданиям
            console.error("Server error:", error.response.data);
        } else if (error.request) {
            // Запрос был отправлен, но сервер не ответил
            console.error("No response received:", error.request);
        } else {
            // Ошибка при настройке запроса
            console.error("Request error:", error.message);
        }
        throw error;
    }
};

