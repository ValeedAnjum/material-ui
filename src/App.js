import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Drawer from "./Drawer";
import Home from "./Home";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
      </Switch>
    </div>
  );
};
export default App;
