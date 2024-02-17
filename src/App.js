import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import { deleteFuncContext } from "./Context";

function App() {
  const tasks = [
    { id: 1, title: "Make a coffee", completed: false },
    { id: 2, title: "GYM for 1.5 hour", completed: false },
    { id: 3, title: "Make a breakfast", completed: false },
  ];

  const [inputValue, setInputValue] = useState("");
  const [tasksList, setTasksList] = useState(tasks);

  const addTask = () => {
    if (inputValue === "") {
      return;
    } else {
      setTasksList((tasks) => {
        const newTaskList = [
          ...tasks,
          { id: uuidv4(), title: inputValue, completed: false },
        ];
        console.log(newTaskList);
        return newTaskList;
      });
      setInputValue("");
    }
  };

  const deleteTask = (id) => {
    setTasksList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="wrapper">
      <h1>ToDoList</h1>
      <AddTaskForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />
      <deleteFuncContext.Provider value={deleteTask}>
        <TaskList tasksList={tasksList} />
      </deleteFuncContext.Provider>
    </div>
  );
}

export default App;
