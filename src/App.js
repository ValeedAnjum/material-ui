import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Switch>
      {/* <Route path="/" render={(props) => <Home {...props} />} /> */}
      <Redirect exact from="/home" to="/home/about" />
      <Redirect exact from="/" to="/home/about" />
      <Route path="/home/:page?" render={(props) => <Home {...props} />} />
    </Switch>
  );
}

export default App;
