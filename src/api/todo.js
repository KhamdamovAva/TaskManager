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
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Full error details:", error.response ? error.response.data : error);
        throw error.response ? error.response.data : { message: "Network error" };
    }
}

export const getTodos = async (filter) => {
    try {
        const token = localStorage.getItem("accessToken"); // Замените на ваш метод получения токена
        const response = await axios.get(`${API_URL}?filter=${filter}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Сервер вернул ошибку с подробностями
            console.error("Server error:", error.response.data);
        } else if (error.request) {
            // Запрос был отправлен, но сервер не ответил
            console.error("No response received:", error.request);
        } else {
            // Ошибка при настройке запроса
            console.error("Request error:", error.message);
        }
        throw error; // Пробрасываем ошибку, чтобы обработать её выше
    }
};

export const updateTodo = async (id, updatedData) => {
    try {
        const token = localStorage.getItem("accessToken");

        // Формируем объект с обязательными полями
        const formattedData = {
            title: updatedData.title,
            description: updatedData.description,
            status: updatedData.status,
            due_date: updatedData.due_date,
        };

        console.log("URL:", `${API_URL}${id}/`);
        console.log("Headers:", { Authorization: `Bearer ${token}` });
        console.log("Payload (updatedData):", updatedData);
        
        const response = await axios.put(
            `${API_URL}${id}/`, // URL с ID задачи
            formattedData,      // Только необходимые поля
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log("Server response:", response.data); // Логируем успешный ответ
        return response.data;
    } catch (error) {
        console.error("Error updating todo:", error.response ? error.response.data : error);
        throw error.response ? error.response.data : { message: "Network error" };
    }
};


export const deleteTodo = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.delete(`${API_URL}${id}/`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  };