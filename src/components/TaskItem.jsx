import { Checkbox } from "@mui/material";
import { useState } from "react";

function TaskItem(props) {
  const [completed, setCompleted] = useState(props.completed);

  const handleClick = () => {
    return setCompleted(!completed);
  };

  return (
    <div style={{ display: "flex" }}>
      <Checkbox onClick={handleClick} />
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {props.title}
      </p>
    </div>
  );
}

export default TaskItem;
