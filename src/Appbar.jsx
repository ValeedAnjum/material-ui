import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "240px",
    width: "calc(100% - 240px)",
  },
  leftOptions: {
    flexGrow: 1,
  },
}));
const Appbar = () => {
  const [anchorEl, setanchorEl] = useState(null);
  const theme = useTheme();
  const classes = useStyles(theme);
  const menuOpen = (event) => {
    setanchorEl(event.target);
  };
  const menuClose = () => {
    setanchorEl(null);
  };
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div className={classes.leftOptions}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </div>
        <div>
          <IconButton color="inherit" onClick={menuOpen}>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className="dropdown">
          <Menu
            open={Boolean(anchorEl)}
            onClose={menuClose}
            anchorEl={anchorEl}
          >
            <MenuItem onClick={() => setanchorEl(null)}>
              <IconButton>
                <PersonIcon />
              </IconButton>
              <Typography variant="h6">Valeed Anjum</Typography>
            </MenuItem>
            <MenuItem onClick={() => setanchorEl(null)}>
              <IconButton>
                <VpnKeyIcon />
              </IconButton>
              <Typography variant="h6">Logout</Typography>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
