import React, { Component } from 'react'
import { connect } from 'react-redux'
import fanhui from '@/assets/fanhui.jpg'
import cart from '@/assets/cart.jpg'
import { Shop, Detail, Commet } from '@/router/assembly'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import './style.less'

export default
@connect((state) => {
  return {
    name: state.home.name,
    age: state.home.age,
  }
})
class Home extends Component {
  goback = () => {
    this.props.history.push('/home')
  }
  toCar = () => {
    this.props.history.push('/cart')
  }
  render() {
    const gid = this.props.match.params.gid
    return (
      <div className="goods">
        <header>
          <div onClick={this.goback} className="goodsheadleft">
            <img src={fanhui} alt="" />
          </div>
          <div className="goodsheadmid">
            <NavLink to={`/goods/shop/${gid}`}>商品</NavLink>
            <NavLink to={`/goods/detail/${gid}`}>详情</NavLink>
            <NavLink to={`/goods/commet/${gid}`}>评价</NavLink>
          </div>
          <div className="goodsheadright" onClick={this.toCar}>
            <img src={cart} alt="" />
          </div>
        </header>
        <Switch>
          <Route path="/goods/detail/:gid" component={Detail} />
          <Route path="/goods/commet/:gid" component={Commet} />
          <Route path="/goods/shop/:gid" component={Shop} />
          <Redirect to={`/goods/shop/${gid}`} />
        </Switch>
      </div>
    )
  }
}
