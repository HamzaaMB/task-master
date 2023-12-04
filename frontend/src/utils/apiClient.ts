import axios from "axios";

const apiUrl = "http://localhost:3001/api";

  export const fetchTasksData = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  };

  export const addTask = async (task: string) => {
    try {
      await axios.post(apiUrl, { task });
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  };

  export const deleteTask = async (taskId: string) => {
    try {
      await axios.delete(`${apiUrl}/${taskId}`);
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  };


