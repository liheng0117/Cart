<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Search, SearchGoods, Home, Login, Reg } from './assembly'
=======
import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Cart, User } from "./assembly";
=======
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Goods } from "./assembly";
>>>>>>> cpf
>>>>>>> 8aeb350925f55f568a033955d71cc43966b86e79

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User} />
          <Redirect to="/home" />
=======
<<<<<<< HEAD
          <Route path="/search" component={Search} />
          <Route path="/searchgoods" component={SearchGoods} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/" component={Home} />
=======
          <Route path="/goods" component={Goods} />
          <Route path="/" component={Goods} />
>>>>>>> cpf
>>>>>>> 8aeb350925f55f568a033955d71cc43966b86e79
        </Switch>
      </BrowserRouter>
    )
  }
}
