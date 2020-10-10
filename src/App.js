import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Navigation from "./components/Navigation/Navigation";
import Play from "./Views/Play";

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
