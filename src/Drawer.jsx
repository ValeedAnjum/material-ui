import React from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  drawer: {
    width: "160px",
    border: "1px solid red",
  },
});
const Drawer = () => {
  const classes = useStyles();
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
