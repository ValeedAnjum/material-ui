import {
  AppBar,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Toolbar,
} from "@material-ui/core";
import React, { Fragment } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";

const App = () => {
  return (
    <Fragment>
      <FormControl style={{ margin: "20px" }}>
        <InputLabel>I am label</InputLabel>
        <Input
          id="input-with-icon"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </Fragment>
  );
};

export default App;
