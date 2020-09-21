import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
const useStyles = makeStyles({
  thereStyle: {
    color: "blue",
    // fontSize: "30px",
  },
  buttonStyle: {
    color: "green",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography variant="h1" color="primary" className={classes.thereStyle}>
        Hello Anjum
      </Typography>
      <Button
        color="primary"
        className={classes.buttonStyle}
        variant="contained"
      >
        This is button component
      </Button>
    </div>
  );
}

export default App;
