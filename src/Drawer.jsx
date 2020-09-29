import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "240px",
  },
  belowAppBar: theme.mixins.toolbar,
}));
const LeftMenu = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Drawer open variant="permanent">
      <div className={classes.belowAppBar} />
      <Divider />
      <List className={classes.drawer}>
        {/* <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Valeed Anjum</Typography>
          </ListItemText>
        </ListItem> */}

        {["Valeed Anjum", "Graphs", "VPN", "Tools", "About", "Contact"].map(
          (text, index) => (
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <PersonIcon /> : <VpnKeyIcon />}
              </ListItemIcon>
              <ListItemText>
                <Typography>{text}</Typography>
              </ListItemText>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

export default LeftMenu;
