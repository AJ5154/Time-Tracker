import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const TaskItem = ({ task, startTimer, stopTimer, deleteTask }) => {
  const startTimerHandler = () => {
    startTimer(task.id);
  };

  const stopTimerHandler = () => {
    stopTimer();
  };

  return (
    <li>
      <span>{task.name}</span>
      <span>Time: {task.time} seconds</span>
      {task.isRunning ? (
        <Button onClick={stopTimerHandler}>Stop</Button>
      ) : (
        <Button onClick={startTimerHandler}>Start</Button>
      )}
      <Button onClick={() => deleteTask(task.id)}>
        <Delete />
        Delete
      </Button>
    </li>
  );
};

export default TaskItem;
