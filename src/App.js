import React from "react";
import "./App.css";
import Main from "./pages/main";
import Admin from "./pages/admin";
import Config, { Roles } from "./config";

export default class App extends React.Component {
  render() {
    console.log(process.env)
    switch (Config.buildOption) {
      case Roles.Guest:
        return <Main />;
      case Roles.Admin:
        return <Admin />;

      default:
        return <div></div>;
    }
  }
}
