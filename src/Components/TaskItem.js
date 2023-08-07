import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const TaskItem = ({ task, startTimer, stopTimer, deleteTask }) => {
  const handleStartTimer = () => {
    startTimer(task.id);
  };

  const handleStopTimer = () => {
    stopTimer();
  };

  return (
    <li>
      <span>{task.name}</span>
      <span>Time: {task.time} seconds</span>
      {task.isRunning ? (
        <Button onClick={handleStopTimer}>Stop</Button>
      ) : (
        <Button onClick={handleStartTimer}>Start</Button>
      )}
      <Button onClick={() => deleteTask(task.id)}>
        <Delete />
        Delete
      </Button>
    </li>
  );
};

export default TaskItem;
