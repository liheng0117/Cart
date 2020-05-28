import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import './style.less'

export default class HomeHead extends Component {
  render() {
    const { headClassName } = this.props;
    return (
      <div className={`comp-homehead ${headClassName}`}>
        <div><Link to="/fenlei"><Icon type="bars" /></Link></div>
        <div>          
          <Icon type="search" />
          <Link to="/search"><input type="text" placeholder="输入喜欢的宝贝名称" /></Link>
        </div>
        <div><Link to="/login">登录</Link></div>
      </div>
    )
  }
}
