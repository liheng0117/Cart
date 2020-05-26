import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Search, SearchGoods } from './assembly'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/searchgoods" component={SearchGoods} />
        </Switch>
      </BrowserRouter>
    )
  }
}
