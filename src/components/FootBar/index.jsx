import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'
import './style.less'

export default class FootBar extends Component {
  render() {
    return (
      <div className="comp-footbar">
        <NavLink to="/home" className="foot-bar">
          <dl>
            <dt><Icon type="home" /></dt>
            <dd>首页</dd>
          </dl>
        </NavLink>
        <NavLink to="/cart" className="foot-bar">
          <dl>
            <dt><Icon type="shopping-cart" /></dt>
            <dd>购物车</dd>
          </dl>          
        </NavLink>
        <NavLink to="/user" className="foot-bar">
          <dl>
            <dt><Icon type="user" /></dt>
            <dd>我的</dd>
          </dl>          
        </NavLink>
      </div>
    )
  }
}
