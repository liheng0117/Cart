import React, { Component } from "react"
import { connect } from "react-redux"
import fanhui from "@/assets/fanhui.jpg"
import cart from "@/assets/cart.jpg"
import { Shop, Detail, Commet } from "@/router/assembly"
import { Switch, Route, NavLink, Redirect } from "react-router-dom"
import "./style.less"

export default
@connect(
  (state) => {
    return {
      name: state.home.name,
      age: state.home.age,
    }
  }
)
class Home extends Component {
  render() {
    return (
      <div className="goods">
        <header>
          <div className="goodsheadleft">
            <img src={fanhui} alt="" />
          </div>
          <div className="goodsheadmid">
            <NavLink to="/goods/shop/714246965">商品</NavLink>
            <NavLink to="/goods/detail/714246965">详情</NavLink>
            <NavLink to="/goods/commet/714246965">评价</NavLink>
          </div>
          <div className="goodsheadright">
            <img src={cart} alt="" />
          </div>
        </header>
        <Switch>
          <Route path="/goods/detail/:cid" component={Detail} />
          <Route path="/goods/commet/:cid" component={Commet} />
          <Route path="/goods/shop/:cid" component={Shop} />
          <Redirect to="/goods/shop/714246965" />
        </Switch>
      </div>
    )
  }
}
