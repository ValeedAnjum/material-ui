import React, { useState } from "react";
import { Button, Grid, Paper, Switch, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const [darkMode, setdarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Typography>I am Typography</Typography>
          <Button variant="contained" color="secondary">
            This is secondary
          </Button>
          <Button variant="contained" color="primary">
            This is primary
          </Button>
          <Switch checked={darkMode} onClick={() => setdarkMode(!darkMode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
