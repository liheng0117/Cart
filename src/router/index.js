import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Goods } from "./assembly";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/goods" component={Goods} />
          <Route path="/" component={Goods} />
        </Switch>
      </BrowserRouter>
    );
  }
}
