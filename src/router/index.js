import React from 'react'
import {
  Search,
  SearchGoods,
  Home,
  Login,
  Reg,
  Cart,
  User,
  Classification,
  Goods,
} from './assembly'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

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
          <Route path="/classification" component={Classification} />
          <Route path="/goods/detail/:gid" component={Goods} />
          <Route path="/goods/commet/:gid" component={Goods} />
          <Route path="/goods/shop/:gid" component={Goods} />
          <Redirect path="/" to="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}
