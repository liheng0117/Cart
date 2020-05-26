<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Search, SearchGoods } from './assembly'
=======
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, Reg } from "./assembly";
>>>>>>> szs

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path="/search" component={Search} />
          <Route path="/searchgoods" component={SearchGoods} />
=======
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/" component={Home} />
>>>>>>> szs
        </Switch>
      </BrowserRouter>
    )
  }
}
