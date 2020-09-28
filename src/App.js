import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Header from "./Header";

const useStyles = makeStyles({});
const App = () => {
  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
