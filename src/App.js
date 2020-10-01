import {
  AppBar,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Toolbar,
} from "@material-ui/core";
import React, { Fragment } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";

const App = () => {
  return (
    <Fragment>
      <FormControl style={{ margin: "50px" }}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type="text"
          value={""}
          onChange={() => {
            console.log("Input on chnage");
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
              >
                {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                <Visibility />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Fragment>
  );
};

export default App;
