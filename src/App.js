import { AppBar, MenuItem, TextField, Toolbar } from "@material-ui/core";
import React, { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <TextField select variant="outlined">
        <MenuItem value="I am value">I am option</MenuItem>
        <MenuItem value="I am value 2">I am option 2</MenuItem>
      </TextField>
    </Fragment>
  );
};

export default App;
