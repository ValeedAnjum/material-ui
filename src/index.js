import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Firebase from "./Firebase";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <Firebase />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
