import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Components/Timer";
import TaskList from "./Components/TaskList";
import Report from "./Components/Report";
import { Typography } from "@mui/material";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = (taskId) => {
    setActiveTaskId(taskId);
    const startTime = Date.now();
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isRunning: true, startTime } : task
      )
    );

    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  const stopTimer = () => {
    if (activeTaskId !== null) {
      const endTime = Date.now();
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === activeTaskId
            ? {
                ...task,
                isRunning: false,
                time: task.time + Math.floor((endTime - task.startTime) / 1000),
              }
            : task
        )
      );
      setActiveTaskId(null);
    }
    clearInterval(timerInterval);
  };

  const addTask = (taskName) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        name: taskName,
        time: 0,
        isRunning: false,
        startTime: null,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    return () => {
      clearInterval(timerInterval);
    };
  }, [timerInterval]);

  return (
    <div>
      <Typography
        variant="h3"
        component="h3"
        style={{ margin: "5px 80px", textDecoration: "underline" }}
      >
        Time Tracker
      </Typography>
      <Timer currentTime={currentTime} stopTimer={stopTimer} />
      <TaskList
        tasks={tasks}
        startTimer={startTimer}
        stopTimer={stopTimer}
        addTask={addTask}
        deleteTask={deleteTask}
      />
      <Report tasks={tasks} />
    </div>
  );
};

export default App;
