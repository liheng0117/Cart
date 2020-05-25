import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Cart, User } from "./assembly";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}
