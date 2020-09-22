import { Button, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
  const theme = useTheme();
  console.log(theme);
  return (
    <Paper>
      <Button variant="contained" className={classes.button} color="primary">
        Default
      </Button>
    </Paper>
  );
}

export default App;
