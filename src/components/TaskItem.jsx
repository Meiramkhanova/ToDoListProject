import { Checkbox } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TaskItem(props) {
  const [completed, setCompleted] = useState(props.completed);

  const handleClick = () => {
    return setCompleted(!completed);
  };

  const handleDelete = () => {
    props.deleteTask(props.id);
  };

  return (
    <div style={{ display: "flex" }}>
      <Checkbox onClick={handleClick} />
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {props.title}
      </p>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </div>
  );
}

export default TaskItem;
