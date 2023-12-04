import React, { useState } from "react";
import plusIcon from "../../assets/plusIcon.svg";
import checkedIcon from "../../assets/checkedIcon.svg";
import userIcon from "../../assets/userIcon.svg";
import { EditOrDelete } from "../index";
import { deleteTask } from "../../utils/apiClient";

interface TaskItem {
  _id: string;
  task: string;
  id: string;
}

interface CardProps {
  tasks: TaskItem[];
  onAddTodo: (newTask: string) => void;
  setUpdate: (updated: boolean) => void;
}

const Card = ({ tasks, onAddTodo, setUpdate }: CardProps) => {
  const [taskCheckedStates, setTaskCheckedStates] = useState<boolean[]>(
    tasks.map(() => false)
    );
    const [newTask, setNewTask] = useState<string>('');
    
  const handleCheckboxChange = (index: number) => {
    setTaskCheckedStates((prevStates) => {
      const newCheckedStates = [...prevStates];
      newCheckedStates[index] = !newCheckedStates[index];
      return newCheckedStates;
    });
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      /*Call the parent component's onAddTodo callback to trigger the API call*/
      await onAddTodo(newTask);
      /*Clear input after adding new task*/
      setNewTask("");
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setUpdate(true);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600">
        <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-[500px] text-gray-200">
          <div className="flex items-center mb-6">
            <img
              className="h-8 w-8 text-indigo-500 stroke-current"
              src={userIcon}
              alt={"user icon"}
            />
            <h4 className="font-semibold ml-3 text-lg">Your Tasks</h4>
          </div>

          {tasks.map((task: any, index: any) => (
            <div key={task.id} className="flex flex-row">
              <label
                className="flex items-center w-4/5 h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
                tabIndex={0}
              >
                <input
                  key={task.id}
                  className="hidden"
                  checked={taskCheckedStates[index]}
                  type="checkbox"
                  id={task.id}  
                  onChange={() => handleCheckboxChange(index)}
                  aria-label="task list input"
                />

                {taskCheckedStates[index] ? (
                  <button
                    className={
                      "flex items-center justify-center w-5 h-5 text-transparent border-2 border-green-500 rounded-full"
                    }
                    onClick={() => handleCheckboxChange(index)}
                  >
                    <img
                      className="w-4 h-4 fill-current"
                      src={checkedIcon}
                      alt={"tick icon"}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => handleCheckboxChange(index)}
                    className={
                      "flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full"
                    }
                  ></button>
                )}
                <section className="w-full flex flex-row justify-between">
                  <span
                    className={`ml-4 text-sm ${
                      taskCheckedStates[index] ? "line-through" : ""
                    }`}
                  >
                    {task.task}
                  </span>
                </section>
              </label>
              <EditOrDelete onDelete={() => handleDeleteTask(task.id)}/>
            </div>
          ))}

          <button className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <img
              className="w-5 h-5 text-gray-400"
              src={plusIcon}
              alt={"Plus icon"}
            />
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown}
              className='flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text'
              placeholder="add a new task"
              aria-label="add a new task"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
