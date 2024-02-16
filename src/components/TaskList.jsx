import TaskItem from "./TaskItem";

export default function TaskList(props) {
  return (
    <div>
      {props.tasksList.map((task) => {
        return <TaskItem {...task} key={task.id} />;
      })}
    </div>
  );
}
