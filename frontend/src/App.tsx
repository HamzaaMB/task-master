import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components";
import { addTask, fetchTasksData } from "./utils/apiClient";

interface Task {
  _id: string;
  task: string;
  id: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [update]);

  const fetchTodos = async () => {
    try {
      const data = await fetchTasksData();
      setTasks(data);
      setUpdate(false);
    } catch (error) {
      console.error("Error updating tasks:", error);
    }
  };

  const handleAddTodo = async (newTask: string) => {
    try {
      if (newTask.trim() === "") {
        return;
      }
      await addTask(newTask)
      setUpdate(true);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <>
      <h1 className="flex justify-center items-center w-full h-full font-extrabold">
        Tasks board
      </h1>
      <div className="flex items-center justify-center w-screen h-screen font-medium flex-wrap gap-4 md:flex-row bg-gray-900">
        <Card tasks={tasks} onAddTodo={handleAddTodo} setUpdate={setUpdate} />
      </div>
    </>
  );
};

export default App;
