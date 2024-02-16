import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

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
        const newTaskList = [...tasks, { title: inputValue, completed: false }];
        return newTaskList;
      });
      setInputValue("");
    }
  };

  return (
    <div className="wrapper">
      <h1>ToDoList</h1>
      <AddTaskForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />
      <TaskList tasksList={tasksList} />
    </div>
  );
}

export default App;
