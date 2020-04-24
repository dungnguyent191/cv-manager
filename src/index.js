import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import Main from "./pages/main";
import Admin from "./pages/admin";
import config, { Roles } from "./config";

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        {
          config.buildOption === Roles.Admin
            ? <><Route path="/admin" component={Admin} /><Route path="/" component={Main} /></>
            : <Route path="/" component={Main} />
        }

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
