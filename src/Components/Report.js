import { Typography } from "@mui/material";
import React from "react";

const Report = ({ tasks }) => {
  return (
    <div>
      {/* <h2 style={{ margin: "5px 100px" }}>Time Tracking Report</h2> */}
      <Typography variant="h4" component="h2" style={{ margin: "5px 50px" }}>
        Time Tracking Report
      </Typography>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <span>Time: {task.time} seconds</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
