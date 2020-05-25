import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import ComHead from '@@/ComHead'
import './style.less'

export default class User extends Component {
  userClickFn = () => {
    console.log(this.props)
    if ( !localStorage.getItem("token") ) {
      this.props.history.push("/login")
    } else {

    }
  }

  render() {
    return (
      <div className="pages-user">
        <ComHead title="会员中心" />
        <div className="user-main">
          <div className="infobox">
            <dl>
              <dt><Icon type="user" /></dt>
              <dd>
                <p>昵称</p>
                <p>我的积分：0</p>
              </dd>
            </dl>
          </div>
          <div className="orderbox">
            <h3>全部订单</h3>
            <h5 onClick={this.userClickFn}>查看全部订单<Icon type="right" /></h5>
          </div>
          <div className="tradebox">
            <dl onClick={this.userClickFn}>
              <dt><Icon type="schedule" /></dt>
              <dd>待支付</dd>
            </dl>
            <dl onClick={this.userClickFn}>
              <dt><Icon type="shopping-cart" /></dt>
              <dd>待收货</dd>
            </dl>
            <dl onClick={this.userClickFn}>
              <dt><Icon type="rocket" /></dt>
              <dd>待评价</dd>
            </dl>
          </div>
          <ul className="managebox">
            <li onClick={this.userClickFn}>个人资料<Icon type="right" /></li>
            <li onClick={this.userClickFn}>地址管理<Icon type="right" /></li>
            <li onClick={this.userClickFn}>绑定手机<Icon type="right" /></li>
            <li onClick={this.userClickFn}>修改密码<Icon type="right" /></li>
            <li onClick={this.userClickFn}>我的收藏<Icon type="right" /></li>
          </ul>
          <div className="btnbox">
            <button><Link to="/login">登录/注册</Link></button>
          </div>
        </div>
      </div>
    )
  }
}
