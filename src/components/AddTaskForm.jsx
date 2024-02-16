import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddTaskForm(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        variant="outlined"
        label="Add Task"
        onChange={(e) => props.setInputValue(e.target.value)}
        value={props.inputValue}
      />
      <Button
        variant="contained"
        sx={{ width: "150px", marginTop: "15px" }}
        onClick={props.addTask}
      >
        Add Task
      </Button>
    </div>
  );
}

export default AddTaskForm;
