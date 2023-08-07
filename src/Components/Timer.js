import { Button, Typography } from "@mui/material";
import React from "react";

const Timer = ({ currentTime, stopTimer }) => {
  return (
    <div>
      <Typography variant="h4" component="h2" style={{ margin: "5px 30px" }}>
        Current Time: {currentTime} seconds
      </Typography>
      <Button
        variant="outlined"
        style={{ marginLeft: "150px", marginTop: "5px" }}
        onClick={stopTimer}
      >
        Stop Timer
      </Button>
    </div>
  );
};

export default Timer;
