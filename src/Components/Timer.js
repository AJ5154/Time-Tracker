import { Button, Typography } from "@mui/material";
import React from "react";

const Timer = ({ currentTime, stopTimer, resetTimer }) => {
  return (
    <div>
      <Typography variant="h4" component="h2" style={{ margin: "5px 20px" }}>
        Current Time: {currentTime} seconds
      </Typography>
      <Button
        variant="outlined"
        style={{ marginLeft: "90px", marginTop: "5px" }}
        onClick={stopTimer}
      >
        Stop Timer
      </Button>
      <Button
        variant="outlined"
        style={{ marginLeft: "15px", marginTop: "5px" }}
        onClick={resetTimer}
      >
        Reset Timer
      </Button>
    </div>
  );
};

export default Timer;
