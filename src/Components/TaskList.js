import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Button, TextField, Typography } from "@mui/material";

const TaskList = ({ tasks, startTimer, stopTimer, addTask, deleteTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div>
      <Typography variant="h4" component="h2" style={{ margin: "5px 140px" }}>
        Task List
      </Typography>
      <div>
        <TextField
          id="standard-basic"
          label="Enter task name"
          variant="outlined"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          size="small"
          style={{ height: "40px", marginLeft: "50px" }}
        />
        <Button
          variant="outlined"
          size="medium"
          onClick={handleAddTask}
          style={{ height: "40px", marginLeft: "5px" }}
        >
          Add Task
        </Button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            startTimer={startTimer}
            stopTimer={stopTimer}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
