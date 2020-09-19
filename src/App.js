import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
const useStyles = makeStyles({
  thereStyle: {
    color: "blue",
    fontSize: "30px",
  },
  buttonStyle: {
    color: "green",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography color="primary" className={classes.thereStyle}>
        <h1>Hello Anjum</h1>
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
