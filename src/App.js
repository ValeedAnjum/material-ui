import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Breadcrumbs from "./Breadcrumbs";
import Designer from "./Designer";
import Engineer from "./Engineer";
import Home from "./Home";
import Jobs from "./Jobs";
import Marketer from "./Marketer";

const App = () => {
  return (
    <Fragment>
      <Breadcrumbs />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/jobs" render={(props) => <Jobs {...props} />} />
        <Route
          exact
          path="/jobs/engineer"
          render={(props) => <Engineer {...props} />}
        />
        <Route
          exact
          path="/jobs/marketer"
          render={(props) => <Marketer {...props} />}
        />
        <Route
          exact
          path="/jobs/designer"
          render={(props) => <Designer {...props} />}
        />
      </Switch>
    </Fragment>
  );
};

export default App;
