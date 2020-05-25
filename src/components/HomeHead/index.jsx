import React, { Component } from 'react'
import { Icon } from 'antd'
import './style.less'

export default class HomeHead extends Component {
  render() {
    const { headClassName } = this.props;
    return (
      <div className={"comp-homehead"+" "+headClassName}>
        <div><Icon type="bars" /></div>
        <div>
          <Icon type="search" />
          <input type="text" placeholder="输入喜欢的宝贝名称" />
        </div>
        <div>登录</div>
      </div>
    )
  }
}
