import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Play from "./Play";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/play" component={Play} />
      </Switch>
    </Fragment>
  );
};

export default App;
