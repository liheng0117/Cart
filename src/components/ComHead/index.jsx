import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import './style.less'

export default class ComHead extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="comp-comhead">
        <div><Link to="/home"><Icon type="left" /></Link></div>
        <div>{title}</div>
        <div></div>
      </div>
    )
  }
}
