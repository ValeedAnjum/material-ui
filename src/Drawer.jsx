import React from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
  list: {
    width: "180px",
  },
});

const Drawer = (props) => {
  const classes = useStyles();
  const { history } = props;

  const listItem = [
    { text: "Home", icon: <MailIcon />, onClick: () => history.push("/") },
    {
      text: "About",
      icon: <MenuIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Contact",
      icon: <MailIcon />,
      onClick: () => history.push("/contact"),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List className={classes.list}>
        {listItem.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
