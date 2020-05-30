import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Reg, Classification } from "./assembly";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/classification" component={Classification} /> 
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
        </Switch>
      </BrowserRouter>
    );
  }
}
