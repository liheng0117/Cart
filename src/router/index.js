import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Search, SearchGoods, Home, Login, Reg, Cart, User, Goods  } from './assembly'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User} />
          <Route path="/search" component={Search} />
          <Route path="/searchgoods" component={SearchGoods} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/goods" component={Goods} />
          <Redirect path="/" to="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}
