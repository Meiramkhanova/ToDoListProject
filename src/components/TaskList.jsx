import { useContext } from "react";
import TaskItem from "./TaskItem";
import { deleteFuncContext } from "../Context";

export default function TaskList(props) {
  const deleteTask = useContext(deleteFuncContext);

  return (
    <div>
      {props.tasksList.map((task) => {
        return <TaskItem {...task} key={task.id} deleteTask={deleteTask} />;
      })}
    </div>
  );
}
