import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStlyes = makeStyles((theme) => ({
  button: {
    backgroundColor: "red",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "blue",
    },
  },
}));
function App() {
  const classes = useStlyes();
  return (
    <div className="App">
      <Button variant="contained" className={classes.button} color="primary">
        Default
      </Button>
    </div>
  );
}

export default App;
