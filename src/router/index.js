<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Goods } from "./assembly";
=======
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Search, SearchGoods, Home, Login, Reg } from './assembly'
>>>>>>> 13b7d95a36abc78e9d7d1f732742692d338d8ede

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path="/goods" component={Goods} />
          <Route path="/" component={Goods} />
=======
          <Route path="/search" component={Search} />
          <Route path="/searchgoods" component={SearchGoods} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/" component={Home} />
>>>>>>> 13b7d95a36abc78e9d7d1f732742692d338d8ede
        </Switch>
      </BrowserRouter>
    )
  }
}
