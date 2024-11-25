import axios from "axios";

const API_URL = "https://539b-84-54-83-231.ngrok-free.app/api/todos/";

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


