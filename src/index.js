import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import Main from "./pages/main";
import Admin from "./pages/admin";
import config, { Roles } from "./config";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        {config.buildOption === Roles.Admin ? (
          <>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Main} />
          </>
        ) : (
          <Route path="/" component={Main} />
        )}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
